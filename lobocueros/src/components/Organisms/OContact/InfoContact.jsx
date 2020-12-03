import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Buttons from "../../Atoms/AReusable/Buttons";
import emailjs from 'emailjs-com';
import Alert from '@material-ui/lab/Alert';

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

  var letras="abcdefghyjklmnñopqrstuvwxyz";
  function tiene_letras(texto){
    texto = texto.toLowerCase();
    var i = 0
    for(i=0; i<texto.length; i++){
       if (letras.indexOf(texto.charAt(i),0)!==-1){
          return true;
       }
    }
    return false; 
  }

  var numeros="0123456789";
  function tiene_numeros(texto){
    var i = 0
    for(i=0; i<texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0)!==-1){
          return 1;
        }
    }
    return 0;
  }

  function validar_email( email ) 
  {
      var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email) ? true : false;
  }

  function sendEmail(e) {
    if (
      document.getElementById("asunto").value === "" ||
      document.getElementById("cedula").value === "" ||
      document.getElementById("nombre").value === "" ||
      document.getElementById("apellido").value === "" ||
      document.getElementById("email").value === "" ||
      document.getElementById("telefono").value === "" ||
      document.getElementById("mensaje").value === "" 
      ) {
      e.preventDefault();
      document.getElementById("alert").style.display = "flex"
    }
    else if(tiene_letras(document.getElementById("cedula").value) === true){
      e.preventDefault();
      document.getElementById("alertCedula").style.display = "flex"
    }
    else if(tiene_letras(document.getElementById("telefono").value) === true){
      e.preventDefault();
      document.getElementById("alertTelefono").style.display = "flex"
    }
    else if(tiene_numeros(document.getElementById("nombre").value) === true){
      e.preventDefault();
      document.getElementById("alertNombre").style.display = "flex"
    }
    else if(tiene_numeros(document.getElementById("apellido").value) === true){
      e.preventDefault();
      document.getElementById("alertApellido").style.display = "flex"
    }
    else if(validar_email(document.getElementById("email").value) === false){
      e.preventDefault();
      document.getElementById("alertEmail").style.display = "flex"
    }
    else{
      emailjs.sendForm('LOBO2020', 'template_lobo2020', e.target, 'user_YMPSNHEVKIj9rsmTSKzYB')
      .then((result) => {
        console.log(result.text);
        
      }, (error) => {
        console.log(error.text);
        
      });
      e.target.reset()
    }


  }

  return (
    <div className="container-InfoContact">
      <Alert id="alert" severity="error" style={{display: "none"}}>POR FAVOR LLENA TODOS LOS CAMPOS</Alert>
      <Alert id="alertCedula" severity="error" style={{display: "none"}}>LA CEDULA SOLO PUEDE TENER NUMEROS</Alert>
      <Alert id="alertTelefono" severity="error" style={{display: "none"}}>EL TELEFONO SOLO PUEDE TENER NUMEROS</Alert>
      <Alert id="alertNombre" severity="error" style={{display: "none"}}>EL NOMBRE SOLO PUEDE TENER LETRAS</Alert>
      <Alert id="alertApellido" severity="error" style={{display: "none"}}>EL APELLIDO SOLO PUEDE TENER LETRAS</Alert>
      <Alert id="alertEmail" severity="error" style={{display: "none"}}>EL EMAIL ES INCORECTO</Alert>
      <form noValidate autoComplete="off" onSubmit={sendEmail}>
        <TextField id="asunto" label="Asunto" variant="outlined" className={classes.field} name="asunto"/>
        <TextField id="cedula" label="Cedula" variant="outlined" className={classes.field} name="cedula"/>
        <br></br>
        <TextField id="nombre" label="Nombre" variant="outlined" className={classes.field}  name="nombre"/>
        <TextField id="apellido" label="Apellido" variant="outlined" className={classes.field} name="apellido"/>
        <br></br>
        <TextField id="email" label="E-Mail" variant="outlined" className={classes.field} name="email" />
        <TextField id="telefono" label="Teléfono" variant="outlined" className={classes.field} name="telefono"/>
        <br></br>
        <TextField id="mensaje" label="Mensaje" variant="outlined" className={classes.direction} name="mensaje"/>
        <Buttons type="Send" text="Enviar"></Buttons>
      </form>
    </div> 
  );
};

export default InfoContact