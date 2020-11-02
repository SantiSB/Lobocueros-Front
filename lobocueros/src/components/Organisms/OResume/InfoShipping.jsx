import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import Alert from '@material-ui/lab/Alert';
import Buttons from "../../Atoms/AReusable/Buttons";

const useStyles = makeStyles((theme) => ({
  direction:{
    width: '93%',
  },
  field:{
    width: '46%',
  }
}));

const InfoShipping = () => {

  var letras="abcdefghyjklmnñopqrstuvwxyz";
  function tiene_letras(texto){
    texto = texto.toLowerCase();
    var i = 0
    for(i=0; i<texto.length; i++){
       if (letras.indexOf(texto.charAt(i),0)!=-1){
          return true;
       }
    }
    return false;
  }

  var numeros="0123456789";
  function tiene_numeros(texto){
    var i = 0
    for(i=0; i<texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0)!=-1){
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
      document.getElementById("ccedula").value == "" ||
      document.getElementById("cnombre").value == "" ||
      document.getElementById("capellido").value == "" ||
      document.getElementById("cemail").value == "" ||
      document.getElementById("ctelefono").value == "" ||
      document.getElementById("cdireccion").value == "" 
      ) {
      e.preventDefault();
      document.getElementById("calert").style.display = "flex"
    }
    else if(tiene_letras(document.getElementById("ccedula").value) == true){
      e.preventDefault();
      document.getElementById("calertCedula").style.display = "flex"
    }
    else if(tiene_letras(document.getElementById("ctelefono").value) == true){
      e.preventDefault();
      document.getElementById("calertTelefono").style.display = "flex"
    }
    else if(tiene_numeros(document.getElementById("cnombre").value) == true){
      e.preventDefault();
      document.getElementById("calertNombre").style.display = "flex"
    }
    else if(tiene_numeros(document.getElementById("capellido").value) == true){
      e.preventDefault();
      document.getElementById("calertApellido").style.display = "flex"
    }
    else if(validar_email(document.getElementById("cemail").value) == false){
      e.preventDefault();
      document.getElementById("calertEmail").style.display = "flex"
    }
    else{
      // emailjs.sendForm('2110', 'template_f3bwk5l', e.target, 'user_gJtoKirse4ethYFDESQFa')
      // .then((result) => {
        
      // }, (error) => {
        
      // });
      // e.target.reset()
      console.log("yes")
    }


  }

  const classes = useStyles();
  return (
    <div  className="container-InfoShipping" >
      <p className="title-steep">Paso 1 de 3</p>
      <p className="subtitle-steep">Diligenciar información de envío</p>
      <Alert id="calert" severity="error" style={{display: "none"}}>POR FAVOR LLENA TODOS LOS CAMPOS</Alert>
      <Alert id="calertCedula" severity="error" style={{display: "none"}}>LA CEDULA SOLO PUEDE TENER NUMEROS</Alert>
      <Alert id="calertTelefono" severity="error" style={{display: "none"}}>EL TELEFONO SOLO PUEDE TENER NUMEROS</Alert>
      <Alert id="calertNombre" severity="error" style={{display: "none"}}>EL NOMBRE SOLO PUEDE TENER LETRAS</Alert>
      <Alert id="calertApellido" severity="error" style={{display: "none"}}>EL APELLIDO SOLO PUEDE TENER LETRAS</Alert>
      <Alert id="calertEmail" severity="error" style={{display: "none"}}>EL EMAIL ES INCORECTO</Alert>
      <form noValidate autoComplete="off" onSubmit={sendEmail}>
        <TextField id="cnombre" label="Nombre" variant="outlined" className={classes.field} />
        <TextField id="capellido" label="Apellido" variant="outlined" className={classes.field}/>
        <br></br>
        <TextField id="cdireccion" label="Dirección" variant="outlined" className={classes.field}/>
        <TextField id="ccedula" label="Cedula" variant="outlined" className={classes.field}/>
        <br></br>
        <TextField id="cemail" label="E-Mail" variant="outlined" className={classes.field}/>
        <TextField id="ctelefono" label="Teléfono" variant="outlined" className={classes.field}/>
        <Buttons type="Send" text="Confirmar"></Buttons>
      </form>
    </div>
  );
};

export default InfoShipping