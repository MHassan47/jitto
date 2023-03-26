import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Item from "./Item";
function Category() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-row  bg-purple-600 p-6 text-xl text-white text-center font-semibold rounded-sm"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <IoIosArrowDown className="w-8 h-8 " />
        ) : (
          <IoIosArrowForward className="w-8 h-8 " />
        )}
        <div className="flex-1">Detail</div>
      </div>
      {isOpen && (
        <div className="flex flex-col my-6">
          <Item>lorem ipsum</Item>
          <Item>lorem ipsum</Item>
        </div>
      )}
    </>
  );
}

export default Category;
