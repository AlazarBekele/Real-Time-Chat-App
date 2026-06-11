import { Link, Routes, Route } from "react-router-dom";
// Pages
import Mainpage from "./Components/Main/mainpage.jsx";
import LoginPage from "./Components/Authentication/LoginPage/loginpage.jsx";
import Register from "./Components/Authentication/Registration/registration.jsx";

// Refresh
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// ProtectedRoute
import ProtectedRoute from "./Components/routes/ProtectedRoute.jsx";
import { auth } from "./firebase/firebase.js";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/main");
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

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
