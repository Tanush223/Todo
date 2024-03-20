const dbTodo = require("../Models/todo.model");

const validateUserTodo = async (req, res, next) => {
  try {
    const todo = await dbTodo.findOne({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!todo) {
      return res.status(404).json({
        message: "Todo not found or unauthorized access",
      });
    }
    next();
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
module.exports = validateUserTodo;
