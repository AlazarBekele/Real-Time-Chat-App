import { Link, Routes, Route } from "react-router-dom";
import Mainpage from "./Components/Main/mainpage.jsx";
import LoginPage from "./Components/Authentication/LoginPage/loginpage.jsx";
import Register from "./Components/Authentication/Registration/registration.jsx";

// ProtectedRoute
import ProtectedRoute from "./Components/routes/ProtectedRoute.jsx";

function App() {
  const user = true;

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
