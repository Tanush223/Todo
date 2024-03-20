const express = require("express");
const route = express.Router();
const jwtMiddleware = require("./validationCheck");
const zod = require("zod");
const dbTodo = require("../Models/todo.model");
const validateUserTodo = require("./validateUserTodo");

const todoCreate = zod.object({
  text: zod.string(),
  complete: zod.boolean(),
});

route.get("/", (req, res) => {
  res.send("hiii");
});

route.post("/", jwtMiddleware, async (req, res) => {
  const { success } = todoCreate.safeParse(req.body);
  if (!success) {
    return res.status(401).json({
      message: "invalied inputs",
    });
  }
  try {
    const todo = await dbTodo.create({
      userId: req.userId,
      text: req.body.text,
      completed: req.body.completed,
    });
    res.status(201).json({
      message: "Todo created",
      todo,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

route.delete(
  "/delete/:id",
  jwtMiddleware,
  validateUserTodo,
  async (req, res) => {
    try {
      const todoId = req.params.id;
      const deletedTodo = await dbTodo.deleteOne({ _id: todoId });
      if (deletedTodo.deletedCount === 0) {
        return res.zstatus(404).json({
          message: "Todo not found",
        });
      }
      res.json({
        message: "Todo deleted",
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
);

route.get("/all", jwtMiddleware, async (req, res) => {
  try {
    const todos = await dbTodo.find({ userId: req.userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = route;
