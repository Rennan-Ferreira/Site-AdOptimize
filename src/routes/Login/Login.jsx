// src/routes/Login/Login.jsx
import React from "react";
import { auth, provider } from "../../api/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Login com Google bem-sucedido:", result.user);
        navigate("/"); // Redireciona após login
      })
      .catch((error) => {
        console.error("Erro ao fazer login com Google:", error);
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button className="google-login-btn" onClick={handleLogin}>
        Login com Google
      </button>
    </div>
  );
};

export default Login;
