import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Main from "./pages/Main";

function App() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path="/login" element={<Main />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
