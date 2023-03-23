import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path="/login" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
