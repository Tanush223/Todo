import Button from "./Button";
import Textinput from "./Textinput";

const Navbar = ({}) => {
  return (
    <>
      <>
        <div className="flex justify-between bg-[#c8c8c8] w-full h-13">
          <div className=" px-2 mt-3">
            <div className="bg-[#ff7a7a] p-2 px-7  rounded-3xl ">user</div>
          </div>

          <Textinput
            className=""
            placeholeder={"search"}
            onChange={() => {
              (e) => {
                e.target.value;
              };
            }}
          />
          <div className="rounded-3xl mt-3">
            <Button lable={"Logout"} />
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;
