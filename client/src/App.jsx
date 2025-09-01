import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./pages/Homepage/Homepage.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import UserDashboard from "./pages/UserDashboard/UserDashboard.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
