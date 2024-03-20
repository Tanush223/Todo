import { useState } from "react";
import axios from "axios";

const CreateTodo = () => {
  const [text, setText] = useState("");

  const handleChangeHandler = (e) => {
    setText(e.target.value);
  };

  const handleSubmitHandler = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      const jwttoken = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3000/todo",
        { text: text, complete: false },
        {
          headers: {
            Authorization: `Bearer ${jwttoken}`,
          },
        }
      );
      // Set todos state with the fetched data
    } catch (error) {
      console.log("Error fetching todos:", error);
    }
  };

  return (
    <>
      <div className="f">
        <div className="flex flex-col justify-center bg-[#ff6b6b] p-5 m-5 rounded-lg shadow-md  ease-in-out duration-300 hover:opacity-80 hover:shadow-[#b75959]">
          <input
            type="text"
            placeholder="Add Todo"
            onChange={handleChangeHandler}
            className="p-5 w-full mb-5 rounded-xl bg-[#ffa4a4] "
          ></input>
          <div className="flex flex-col justify-center ">
            <button
              className="bg-[#353535] p-1 px-5 rounded-lg text-[#e2e2e2] "
              onClick={handleSubmitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTodo;
