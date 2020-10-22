import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	btnGender: {
    borderRadius: "100px",
    fontFamily: "Montserrat",
    border: "1px solid #ffffff",
    color: "#ffffff",
    background: "#000000",
  },
  btnBuy: {
		borderRadius: "100px",
    fontFamily: "Montserrat",
    border: "1px solid #000000",
    color: "#ffffff",
    background: "#DC2929",
  },
  btnAdd: {
		borderRadius: "100px",
    fontFamily: "Montserrat",
    border: "1px solid #000000",
    color: "#ffffff",
    background: "#F97401",
  },
  btnLogin: {
		borderRadius: "100px",
    fontFamily: "Montserrat",
    border: "1px solid #000000",
    color: "#ffffff",
    background: "#4CBC31",
  },
  btnRegister: {
		borderRadius: "100px",
    fontFamily: "Montserrat",
    border: "1px solid #000000",
    color: "#ffffff",
    background: "#00B6FF",
  },
  btnSend: {
    fontFamily: "Montserrat",
    border: "1px solid #000000",
    color: "#ffffff",
    background: "#00B6FF",
  },
  btnPayAgain: {
    fontFamily: "Montserrat",
    border: "1px solid #000000",
    color: "#ffffff",
    background: "#4CBC31",
  },
  }));

const Buttons = (props) => {
    const classes = useStyles();
    if(props.type === "Gender"){
      return(
        <Button className={`btn-gender ${classes.btnGender}`} variant="outlined">{props.text}</Button>
      )
    }
    else if(props.type === "Buy"){
      return(
        <Button className={`btn-buy ${classes.btnBuy}`} variant="outlined">{props.text}</Button>
      )
    }
    else if(props.type === "Add"){
      return(
        <Button className={`btn-add ${classes.btnAdd}`} variant="outlined">{props.text}</Button>
      )
    }
    else if(props.type === "Login"){
      return(
        <Button className={`btn-login ${classes.btnLogin}`} variant="outlined">{props.text}</Button>
      )
    }
    else if(props.type === "Register"){
      return(
        <Button className={`btn-register ${classes.btnRegister}`} variant="outlined">{props.text}</Button>
      )
    }
    else if(props.type === "Send"){
      return(
        <Button type="submit" className={`btn-send ${classes.btnSend}`} variant="outlined">{props.text} </Button>
      )
    }
    else if(props.type === "PayAgain"){
      return(
        <Button className={`btn-pay-again ${classes.btnPayAgain}`} variant="outlined">{props.text}</Button>
      )
    }
    
}
export default Buttons;