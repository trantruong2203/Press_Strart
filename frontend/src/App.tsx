import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import { ContextAuth } from "./contexts/AuthContext";
import HomeAdmin from "./page/admin/HomeAdmin";
import Home from "./page/client/Home";
import GameDetail from "./page/client/GameDetail";
import { Toaster } from "react-hot-toast";
import Login from "./page/auth/Login";
import Signup from "./page/auth/Signup";

function App() {
  const { accountLogin } = useContext(ContextAuth);
  const accountRole = accountLogin?.role;

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={accountLogin ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={accountLogin ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/*"
          element={accountRole === "admin" ? <HomeAdmin /> : <Home />}
        />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
