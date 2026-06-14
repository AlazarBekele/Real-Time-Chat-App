import { Link, Routes, Route } from "react-router-dom";
// Pages
import Mainpage from "./Components/Main/mainpage.jsx";
import LoginPage from "./Components/Authentication/LoginPage/loginpage.jsx";
import Register from "./Components/Authentication/Registration/registration.jsx";

// Refresh
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// ProtectedRoute
import ProtectedRoute from "./Components/routes/ProtectedRoute.jsx";
import { auth, db } from "./firebase/firebase.js";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/main");
      }
      if (!user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const CurrentUserProfile = async () => {
      const user = auth.currentUser;
      if (!user) {
        console.log("No User Logged IN");
      }

      const docRef = doc(db, "users", user.uid);
      const snap = await getDoc(docRef);

      if (snap.exists) {
        console.log(snap.data());
      }
    };

    CurrentUserProfile();
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
