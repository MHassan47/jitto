import { useContext } from "react";
import { IoIosAdd } from "react-icons/io";
import { CartContext } from "../CartProvider";
function ProductList({ category, productData }) {
  const { cartItems, addToCart } = useContext(CartContext);

  let filteredProducts =
    category !== "All"
      ? productData.filter((product) => product.foodGroup === category)
      : productData;

  const addToCartHandler = (product) => {
    addToCart(product);
  };

  return (
    <div className="flex flex-wrap">
      {filteredProducts.map((product, index) => (
        <div
          className="w-full xs:w-1/2 sm:w-1/3  md:w-1/4 lg:w-1/6 p-4"
          key={index}
        >
          <div className="flex justify-end">
            <div
              className="flex justify-center items-center rounded-3xl bg-purple-500
             text-white text-sm w-14 h-6 p-2 font-bold -mb-4 absolute cursor-pointer"
              onClick={() => addToCartHandler(product)}
            >
              <IoIosAdd className="w-6 h-6" /> Add
            </div>
          </div>
          <img src={product.image} alt="img" className="h-20 w-20" />
          <div className="font-bold">${product.price.toFixed(2)}</div>
          <div className="text-gray-500 font-light text-sm">{product.name}</div>
          <div className="text-gray-500 font-light text-xs">
            {product.weight}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
