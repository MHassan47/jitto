import { useState } from "react";
import Detail from "./Detail";
import Header from "./Header";
import Login from "./Login";

function Main() {
  const [mode, setMode] = useState("Login");
  return (
    <div className="h-full">
      <div className="h-1/6">
        <Header setMode={setMode} mode={mode} />
      </div>
      <div className="flex justify-center items-center h-5/6">
        {mode === "Login" && <Login />}
        {mode === "Detail" && <Detail />}
      </div>
    </div>
  );
}

export default Main;
