import React from "react";
import LoginModalResume from "./LoginModalResume";

const LoginRegister = () => {
  return (
    <div className="login-register-container">
        <p>Inicia sesión y saltate los pasos</p>
        <LoginModalResume type="Login" text="Iniciar Sesión"></LoginModalResume>
      <p className="answer-register">¿No estas registrado?</p>
        
        <p>Registrate y enterate de promociones y beneficios</p>
        
        <LoginModalResume type="Register" text="Registrarse"></LoginModalResume>
        
      </div>
  );
};

export default LoginRegister