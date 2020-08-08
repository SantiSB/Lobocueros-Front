import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  direction:{
    width: '93%',
  },
  field:{
    width: '46.5%'
  },
  btnBuy: {
    color: "#ffffff",
    border: "1px solid #ffffff",
    background: "#00B6FF",
    opacity: ".7",
    width: "95%",
  },
}));

const InfoContact = () => {
  const classes = useStyles();
  return (
    <div className="container-InfoContact">
      <form noValidate autoComplete="off">
        <TextField id="direction" label="Asunto" variant="outlined" className={classes.direction}/>
        <br></br>
        <TextField id="outlined-basic" label="Nombre" variant="outlined" className={classes.field} />
        <TextField id="outlined-basic" label="Apellido" variant="outlined" className={classes.field}/>
        <br></br>
        <TextField id="outlined-basic" label="E-Mail" variant="outlined" className={classes.field}/>
        <TextField id="outlined-basic" label="Teléfono" variant="outlined" className={classes.field}/>
        <br></br>
        <TextField id="direction" label="Mensaje" variant="outlined" className={classes.direction}/>
        <Button className={classes.btnBuy} variant="outlined">ENVIAR</Button>
      </form>
    </div>
  );
};

export default InfoContact