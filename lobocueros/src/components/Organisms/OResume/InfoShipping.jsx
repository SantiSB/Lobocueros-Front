import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  direction:{
    width: '93%',
  },
  field:{
    width: '46%',
  }
}));

const InfoShipping = () => {
  const classes = useStyles();
  return (
    <div  className="container-InfoShipping">
      <p className="title-steep">Paso 1 de 3</p>
      <p className="subtitle-steep">Diligenciar información de envío</p>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Nombre" variant="outlined" className={classes.field} />
        <TextField id="outlined-basic" label="Apellido" variant="outlined" className={classes.field}/>
        <br></br>
        <TextField id="direction" label="Dirección" variant="outlined" className={classes.direction}/>
        <br></br>
        <TextField id="outlined-basic" label="E-Mail" variant="outlined" className={classes.field}/>
        <TextField id="outlined-basic" label="Teléfono" variant="outlined" className={classes.field}/>
      </form>
    </div>
  );
};

export default InfoShipping