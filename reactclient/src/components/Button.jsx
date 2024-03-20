const Button = ({ lable, onClick }) => {
  return (
    <>
      <div>
        <button
          onClick={onClick}
          className="bg-[#ff5757] text-[#ffffff] p-2 px-7 rounded-lg shadow-sm transition ease-in-out duration-300 hover:shadow-lg "
        >
          {lable}
        </button>
      </div>
    </>
  );
};
export default Button;
