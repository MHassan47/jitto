import React, { useContext } from "react";
import { CartContext } from "../CartProvider";
import Category from "../components/Category";
import ProductList from "../components/ProductList";
import { productCategories } from "../productData";
function Cart() {
  const { cartItems } = useContext(CartContext);
  console.log("-----", cartItems);

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="flex flex-col items-center border border-gray-200 shadow-md  w-1/2 ">
      <div className="font-bold text-2xl p-4 ">Cart</div>
      <div className="flex flex-col w-3/5">
        {productCategories.map((category) => (
          <Category category={category} productData={cartItems} />
        ))}
      </div>
      <div className="flex justify-end w-full p-4 border-t-4 text-xl font-bold ">
        Subtotal: ${subtotal.toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
