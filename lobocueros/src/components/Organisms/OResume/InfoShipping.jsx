import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45%',
    },
  },
  direction:{
    width: '90%',
  }
}));

const InfoShipping = () => {
  const classes = useStyles();
  return (
    <div  className="container-counter">
      <p>Paso 1 de 3</p>
      <p>Información de envío</p>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        <TextField id="outlined-basic" label="Apellido" variant="outlined" />
        <br></br>
        <TextField id="direction" label="Dirección" variant="outlined" className={classes.direction}/>
        <br></br>
        <TextField id="outlined-basic" label="Correo Electrónico" variant="outlined" />
        <TextField id="outlined-basic" label="Teléfono" variant="outlined" />
      </form>
    </div>
  );
};

export default InfoShipping