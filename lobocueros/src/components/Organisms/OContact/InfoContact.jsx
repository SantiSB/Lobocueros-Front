import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Buttons from "../../Atoms/AReusable/Buttons";
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  direction:{
    width: '93%',
  },
  field:{
    width: '46.5%'
  },
}));

const InfoContact = () => {
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('2110', 'template_f3bwk5l', e.target, 'user_gJtoKirse4ethYFDESQFa')
      .then((result) => {
        
      }, (error) => {
        
      });
      e.target.reset()
  }

  return (
    <div className="container-InfoContact">
      <form noValidate autoComplete="off" onSubmit={sendEmail}>
        <TextField id="asunto" label="Asunto" variant="outlined" className={classes.field} name="asunto"/>
        <TextField id="cedule" label="Cedula" variant="outlined" className={classes.field} name="cedula"/>
        <br></br>
        <TextField id="nombre" label="Nombre" variant="outlined" className={classes.field}  name="nombre"/>
        <TextField id="apellido" label="Apellido" variant="outlined" className={classes.field} name="apellido"/>
        <br></br>
        <TextField id="email" label="E-Mail" variant="outlined" className={classes.field} name="email"/>
        <TextField id="telefono" label="Teléfono" variant="outlined" className={classes.field} name="telefono"/>
        <br></br>
        <TextField id="mensaje" label="Mensaje" variant="outlined" className={classes.direction} name="mensaje"/>
        <Buttons type="Send" text="Enviar"></Buttons>
      </form>
    </div> 
  );
};

export default InfoContact