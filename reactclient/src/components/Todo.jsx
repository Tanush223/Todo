import { useEffect, useState } from "react";
import axios from "axios";

const Todo = ({ text, completed, id }) => {
  const [todo, setTodo] = useState({ text, completed });

  const DeleteTodo = async () => {
    try {
      const jwttoken = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/todo/delete/${id}`, {
        headers: { Authorization: `Bearer ${jwttoken}` },
      });
      console.log(`deleted todo id:${id}`);
    } catch (error) {
      console.log("error while deleting todo:", error);
    }
  };

  const onChangeHandler = () => {
    setTodo((prevTodos) => ({
      ...prevTodos,
      completed: !completed,
    }));
    if (!completed) {
      DeleteTodo();
    }
  };

  useEffect(() => {
    setTodo({ text, completed });
  }, [text, setTodo]);

  return (
    <div className="bg-[#ff6b6b] rounded-lg p-3 mb-2 ">
      <div className="font-normal text-base ">{text}</div>
      <div>
        <input type="checkbox" checked={completed} onChange={onChangeHandler} />
      </div>
    </div>
  );
};

export default Todo;
