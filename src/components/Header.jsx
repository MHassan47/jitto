import React, { useState } from "react";

function Header() {
  const [mode, setMode] = useState("Login");
  return (
    <div className="flex justify-center h-full bg-purple-500">
      <div className="flex justify-around space-x-4 text-center items-center">
        <div className="bg-white px-8 py-4">Login</div>
        <div className="bg-white px-8 py-4">Detail</div>
      </div>
    </div>
  );
}

export default Header;
