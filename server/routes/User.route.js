const express = require("express");
const route = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwtSecret = "password";
const dbUser = require("../Models/user.model");
const dbTodo = require("../Models/todo.model");

const UserSignup = zod.object({
  name: zod.string(),
  email: zod.string(),
  password: zod.string(),
});

const Userlogin = zod.object({
  email: zod.string(),
  password: zod.string().min(6),
});

route.get("/", (req, res) => {
  res.send("hiiiii");
});

route.post("/signup", async (req, res) => {
  const { success } = UserSignup.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: req.body,
    });
  }
  const existingUser = await dbUser.findOne({
    email: req.body.email,
  });
  if (existingUser) {
    return res.status(409).json({
      message: "user already exists",
    });
  }

  const user = await dbUser.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const userId = user._id;

  const token = jwt.sign(
    {
      userId: userId,
    },
    jwtSecret
  );
  res.json({
    token: token,
    message: "user created",
  });
});

route.post("/login", async (req, res) => {
  const { success } = Userlogin.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "invailed inputs",
    });
  }
  const user = await dbUser.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const userId = user._id;

  if (user) {
    const token = jwt.sign(
      {
        userId: userId,
      },
      jwtSecret
    );
    res.json({
      token: token,
      message: "user login",
    });
    return;
  }
  res.json({
    message: "error while loggin in",
  });
});

module.exports = route;
