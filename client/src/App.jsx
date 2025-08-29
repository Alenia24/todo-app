import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./pages/Homepage/Homepage.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  </div>;
}

export default App;
