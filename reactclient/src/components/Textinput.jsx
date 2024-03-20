import { useState } from "react";

const Textinput = ({ placeholeder, onChange }) => {
  return (
    <>
      <div className="flex justify-center m-4 ">
        <input
          className="border rounded-lg p-2 bg-[#ff3e3e] border-[#ffcaca] text-[#493e3e]"
          type="text"
          placeholder={placeholeder}
          onChange={onChange}
        ></input>
      </div>
    </>
  );
};
export default Textinput;
