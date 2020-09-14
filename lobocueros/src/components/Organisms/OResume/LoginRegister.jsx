import React from "react";
import Buttons from "../../Atoms/AReusable/Buttons";
import LoginModal from "../OReusable/LoginModal";
import LoginModalResume from "./LoginModalResume";

const LoginRegister = () => {
  return (
    <div className="login-register-container">
        <p>Inicia sesión y saltate los pasos</p>
        <LoginModalResume></LoginModalResume>
      <p className="answer-register">¿No estas registrado?</p>
        
        <p>Registrate y enterate de promociones y beneficios</p>
        <div>
          <Buttons type="Register" text="Registrarse"></Buttons>
        </div>
        
      </div>
  );
};

export default LoginRegister