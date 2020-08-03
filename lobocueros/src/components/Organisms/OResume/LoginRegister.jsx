import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	btnLogin: {
		color: "#ffffff",
		border: "1px solid #ffffff",
		background: "#4CBC31",
		opacity: ".7",
		borderRadius: "100px",
  },
  btnRegister: {
		color: "#ffffff",
		border: "1px solid #ffffff",
		background: "#00B6FF",
		opacity: ".7",
		borderRadius: "100px",
	},
  }));

const LoginRegister = () => {
  const classes = useStyles();
  return (
    <div className="login-register-container">
        <p>Inicia sesión y saltate los pasos</p>
        <div>
          <Button className={classes.btnLogin} variant="outlined">INICIAR SESION</Button>
        </div>
      <p className="answer-register">¿No estas registrado?</p>
        
        <p>Registrate y enterate de promociones y beneficios</p>
        <div>
          <Button className={classes.btnRegister} variant="outlined">REGISTRARSE</Button>
        </div>
        
      </div>
  );
};

export default LoginRegister