import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Google from '../../../assets/Icons/Google_White.svg'
import Facebook from '../../../assets/Icons/Facebook_White.svg'
import Buttons from './Buttons';

const useStyles = makeStyles((theme) => ({
  input: {
	width: '100%',
	margin: "0.3rem 0rem"
  },
}));

const typeBtn = (type) => {
	if(type === "Registrarse"){
		return "Register"
	}
	else if(type === "Iniciar Sesión"){
		return "Login"
	}
}

const FormLoginRegister = (props) => {
	const classes = useStyles();
    return(
		<>
			<form noValidate autoComplete="off" className="form-login-register">
				<TextField id="outlined-basic" label="Correo Electrónico" variant="outlined" className={classes.input} />
				<br></br>
				<TextField id="direction" label="Contraseña" variant="outlined" className={classes.input}/>
				<br></br>
				<Buttons type={typeBtn(props.action)} text={props.action}></Buttons>
			</form>
			<div className="login-register-social">
				<p>{props.action} CON:</p>
				<div className="social-options-login-register">
					<img src={Google}></img>
					<img src={Facebook}></img>
				</div>
			</div>
		</>
    )
}
export default FormLoginRegister;