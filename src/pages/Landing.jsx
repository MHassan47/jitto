import React from "react";
import Category from "../components/Category";
import { productCategories, productData } from "../productData";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-end mx-6 my-2">
        <div
          className="flex justify-evenly p-2 cursor-pointer hover:bg-purple-700 items-center bg-purple-500 h-10 w-20 font-bold text-white rounded-3xl"
          onClick={() => navigate("/cart")}
        >
          <AiOutlineShoppingCart /> Card
        </div>
      </div>
      <div className="flex flex-col w-3/5">
        {productCategories.map((category) => (
          <Category category={category} productData={productData} />
        ))}
      </div>
    </div>
  );
}

export default Landing;
