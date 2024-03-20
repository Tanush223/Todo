const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    require: true,
    type: String,
  },
  completed: {
    require: true,
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "dbUser",
    required: true,
  },
});

const dbTodo = mongoose.model("dbTodo", todoSchema);

module.exports = dbTodo;
