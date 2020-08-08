import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Google from '../../../assets/Icons/Google_White.svg'
import Facebook from '../../../assets/Icons/Facebook_White.svg'

const useStyles = makeStyles((theme) => ({
  input: {
	width: '100%',
	margin: "0.3rem 0rem"
  },
  btnBuy: {
	color: "#ffffff",
	border: "1px solid #ffffff",
	background: "#DA2727",
	opacity: ".7",
	borderRadius: "100px",
	},
}));

const FormLoginRegister = (props) => {
	const classes = useStyles();
    return(
		<>
			<form noValidate autoComplete="off" className="form-login-register">
				<TextField id="outlined-basic" label="Correo Electrónico" variant="outlined" className={classes.input} />
				<br></br>
				<TextField id="direction" label="Contraseña" variant="outlined" className={classes.input}/>
				<br></br>
				<Button className={classes.btnBuy} variant="outlined">{props.action}</Button>
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