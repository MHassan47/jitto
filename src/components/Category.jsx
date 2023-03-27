import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Item from "./Item";
import ProductList from "./ProductList";
function Category({ category, productData }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-row  bg-purple-600 p-6 text-xl text-white text-center font-semibold rounded-sm mb-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <IoIosArrowDown className="w-8 h-8 " />
        ) : (
          <IoIosArrowForward className="w-8 h-8 " />
        )}
        <div className="flex-1">{category ? category : "Detail"}</div>
      </div>
      {isOpen && (
        <div className="flex flex-col my-6">
          {!category ? (
            <div>
              <Item>lorem ipsum</Item>
              <Item>lorem ipsum</Item>
            </div>
          ) : (
            <ProductList category={category} productData={productData} />
          )}
        </div>
      )}
    </>
  );
}

export default Category;
