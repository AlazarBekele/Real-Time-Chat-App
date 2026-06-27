import { Routes, Route, useNavigate } from "react-router-dom";
// Pages
import Mainpage from "./Components/Main/mainpage.jsx";
import LoginPage from "./Components/Authentication/LoginPage/loginpage.jsx";
import Register from "./Components/Authentication/Registration/registration.jsx";

// Refresh
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

// ProtectedRoute
import ProtectedRoute from "./Components/routes/ProtectedRoute.jsx";
import { auth } from "./firebase/firebase.js";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // Redirect logged-in users from login/register pages
      if (currentUser) {
        if (
          window.location.pathname === "/" ||
          window.location.pathname === "/register"
        ) {
          navigate("/main", { replace: true }); // Use replace to prevent going back to login/register
        }
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/main"
          element={
            <ProtectedRoute user={user}>
              <Mainpage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
