import { Link, Routes, Route } from "react-router-dom";
import Mainpage from "./Components/Main/mainpage.jsx";
import LoginPage from "./Components/Authentication/LoginPage/loginpage.jsx";
import Register from "./Components/Authentication/Registration/registration.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Mainpage />} />
      </Routes>
    </>
  );
}

export default App;
