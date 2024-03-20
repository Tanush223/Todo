import { Link } from "react-router-dom";

const SubHeading = ({ lable, to, totext }) => {
  return (
    <>
      <div className="text-normal px-4 pb-3 text-[#a02727]">
        <div className=" ">{lable}</div>

        <Link className="underline m-1 p-1 cursor-pointer" to={to}>
          {totext}
        </Link>
      </div>
    </>
  );
};
export default SubHeading;
