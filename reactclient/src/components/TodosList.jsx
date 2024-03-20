import Todo from "./Todo";
import { useEffect, useState } from "react";
import axios from "axios";

const TodosList = () => {
  const [todo, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jwtToken = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/todo/all", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        setTodos(response.data); // Set todos state with the fetched data
      } catch (error) {
        console.log("Error fetching todos:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [todo]);
  return (
    <>
      <div className="">
        <div className="bg-[#353535] m-5 p-7 rounded-lg     ">
          <div className="w-[100%] ">
            {todo.map((todo) => (
              <Todo
                id={todo._id}
                key={todo._id}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default TodosList;
