import { RecoilRoot } from "recoil";
import CreateTodo from "../components/CreateTodo";
import TodosList from "../components/TodosList";

const HomePage = () => {
  return (
    <>
      <RecoilRoot>
        <div className="  w-full h-full p-5 ">
          <div className="bg-[#ffb5b5] w-full h-full p-5 rounded-lg ">
            <div className="">
              <CreateTodo />
              <div>
                <TodosList />
              </div>
            </div>
          </div>
        </div>
      </RecoilRoot>
    </>
  );
};

export default HomePage;
