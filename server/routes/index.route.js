const express = require("express");
const route = express.Router();
const userRouter = require("./User.route");
const todoRouter = require("./todo.route");

route.use("/user", userRouter);
route.use("/todo", todoRouter);

module.exports = route;
