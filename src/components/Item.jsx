import React from "react";

function Item(props) {
  return (
    <div className="flex justify-center items-center bg-yellow-300 h-20 w-full my-2">
      {props.children}
    </div>
  );
}

export default Item;
