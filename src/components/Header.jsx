import React, { useState } from "react";

function Header({ setMode, mode }) {
  console.log(mode);
  return (
    <div className="flex justify-center h-full bg-purple-500">
      <div className="flex justify-around space-x-4 text-center items-center ">
        <div
          className={`bg-white px-8 py-4 cursor-pointer text-lg font-semibold ${
            mode === "Login" ? "border-b-8 border-yellow-300" : ""
          }`}
          onClick={() => setMode("Login")}
        >
          Login
        </div>
        <div
          className={`bg-white px-8 py-4 cursor-pointer text-lg font-semibold ${
            mode === "Detail" ? "border-b-8 border-yellow-300" : ""
          }`}
          onClick={() => setMode("Detail")}
        >
          Detail
        </div>
      </div>
    </div>
  );
}

export default Header;
