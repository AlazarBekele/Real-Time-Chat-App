import { Link, Routes, Route } from "react-router-dom";
// Pages
import Mainpage from "./Components/Main/mainpage.jsx";
import LoginPage from "./Components/Authentication/LoginPage/loginpage.jsx";
import Register from "./Components/Authentication/Registration/registration.jsx";

// Refresh
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// ProtectedRoute
import ProtectedRoute from "./Components/routes/ProtectedRoute.jsx";
import { auth, db } from "./firebase/firebase.js";
import { doc, getDoc } from "firebase/firestore";

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
