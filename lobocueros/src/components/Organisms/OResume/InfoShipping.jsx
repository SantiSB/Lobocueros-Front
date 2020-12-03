import React from "react";
import { connect } from "react-redux";
import { setVisibleMiniCart, changeEmail, changeFullName, changeShippingAddress, changeShippingCity, changeTelephone, sendBuy } from "../../../redux/actionsCreators";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import emailjs from 'emailjs-com';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  direction:{
    width: '93%',
  },
  field:{
    width: '46%',
  }
}));

const InfoShipping = (props) => {

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

    const validate = () =>{
      if (
        document.getElementById("ccedula").value === "" ||
        document.getElementById("cnombre").value === "" ||
        document.getElementById("cciudad").value === "" ||
        document.getElementById("cemail").value === "" ||
        document.getElementById("ctelefono").value === "" ||
        document.getElementById("cdireccion").value === "" 
        ) {
          return false
      }
      else if(tiene_letras(document.getElementById("ccedula").value) === true){
        return false
      }
      else if(tiene_letras(document.getElementById("ctelefono").value) === true){
        return false
      }
      else if(tiene_numeros(document.getElementById("cnombre").value) === true){
        return false
      }
      else if(tiene_numeros(document.getElementById("cciudad").value) === true){
        return false
      }  
      else if(validar_email(document.getElementById("cemail").value) === false){
        return false
      }
      else{
        return true
      }
    }

    if (
      document.getElementById("ccedula").value === "" ||
      document.getElementById("cnombre").value === "" ||
      document.getElementById("cciudad").value === "" ||
      document.getElementById("cemail").value === "" ||
      document.getElementById("ctelefono").value === "" ||
      document.getElementById("cdireccion").value === "" 
      ) {
      e.preventDefault();
      document.getElementById("calert").style.display = "flex"
    }
    else{
      
      document.getElementById("calert").style.display = "none"
    }

    if(tiene_letras(document.getElementById("ccedula").value) === true){
      e.preventDefault();
      document.getElementById("calertCedula").style.display = "flex"
    }
    else{
      
      document.getElementById("calertCedula").style.display = "none"
    }

    if(tiene_letras(document.getElementById("ctelefono").value) === true){
      e.preventDefault();
      document.getElementById("calertTelefono").style.display = "flex"
    }
    else{
      
      document.getElementById("calertTelefono").style.display = "none"
    }

    if(tiene_numeros(document.getElementById("cnombre").value) === true){
      e.preventDefault();
      document.getElementById("calertNombre").style.display = "flex"
    }
    else{
      
      document.getElementById("calertNombre").style.display = "none"
    }

    if(tiene_numeros(document.getElementById("cciudad").value) === true){
      e.preventDefault();
      document.getElementById("calertCiudad").style.display = "flex"
    }
    else{
      
      document.getElementById("calertCiudad").style.display = "none"
    }

    if(validar_email(document.getElementById("cemail").value) === false){
      e.preventDefault();
      document.getElementById("calertEmail").style.display = "flex"
    }
    else{
      
      document.getElementById("calertEmail").style.display = "none"
    }

    if(validate() == true){
      // emailjs.sendForm('2110', 'template_f3bwk5l', e.target, 'user_gJtoKirse4ethYFDESQFa')
      // .then((result) => {
         
      // }, (error) => {
        
      // });
      // e.target.reset()
      localStorage.setItem('nombre', document.getElementById("cnombre").value)
      localStorage.setItem('ciudad', document.getElementById("cciudad").value)
      localStorage.setItem('direccion', document.getElementById("cdireccion").value)
      localStorage.setItem('cedula', document.getElementById("ccedula").value)
      localStorage.setItem('email', document.getElementById("cemail").value)
      localStorage.setItem('telefono', document.getElementById("ctelefono").value)
      props.sendBuy(true)
    }
  }

  const classes = useStyles();
  return (
    <div  className="container-InfoShipping" >
      <p className="title-steep">Paso 1 de 2</p>
      <p className="subtitle-steep">Diligenciar información de envío</p>
      <Alert id="calert" severity="error" style={{display: "none"}}>POR FAVOR LLENA TODOS LOS CAMPOS</Alert>
      <Alert id="calertCedula" severity="error" style={{display: "none"}}>LA CEDULA SOLO PUEDE TENER NUMEROS</Alert>
      <Alert id="calertTelefono" severity="error" style={{display: "none"}}>EL TELEFONO SOLO PUEDE TENER NUMEROS</Alert>
      <Alert id="calertNombre" severity="error" style={{display: "none"}}>EL NOMBRE SOLO PUEDE TENER LETRAS</Alert>
      <Alert id="calertCiudad" severity="error" style={{display: "none"}}>LA CIUDAD SOLO PUEDE TENER LETRAS</Alert>
      <Alert id="calertEmail" severity="error" style={{display: "none"}}>EL EMAIL ES INCORECTO</Alert>
      <form noValidate autoComplete="off">
        <TextField id="cnombre" label="Nombre Completo" variant="outlined" className={classes.field} onChange={(e)=>props.changeFullName(e.target.value)} />
        <TextField id="cciudad" label="Ciudad" variant="outlined" className={classes.field} onChange={(e)=>props.changeShippingCity(e.target.value)}/>
        <br></br>
        <TextField id="cdireccion" label="Dirección" variant="outlined" className={classes.field} onChange={(e)=>props.changeShippingAddress(e.target.value)}/>
        <TextField id="ccedula" label="Cedula" variant="outlined" className={classes.field} onChange={(e)=>props.changeEmail(e.target.value)}/>
        <br></br>
        <TextField id="cemail" label="E-Mail" variant="outlined" className={classes.field} onChange={(e)=>props.changeEmail(e.target.value)} />
        <TextField id="ctelefono" label="Teléfono" variant="outlined" className={classes.field} onChange={(e)=>props.changeTelephone(e.target.value)}/>
        <Button variant="contained" color="primary" onClick={sendEmail} style={{margin: "1rem 0.5rem"}}>Confirmar datos</Button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  visibleMiniCart: state.visibleMiniCart,
  valueEmail: state.valueEmail,
  valueFullName: state.valueFullName,
  valueShippingAddress: state.valueShippingAddress,
  valueShippingCity: state.valueShippingCity,
  valueTelephone: state.valueTelephone,
  sendBuy: state.sendBuy
});
  
const mapDispatchToProps = {
  setVisibleMiniCart,
  changeEmail,
  changeFullName,
  changeShippingAddress,
  changeShippingCity,
  changeTelephone,
  sendBuy
};
  
export default connect(mapStateToProps, mapDispatchToProps)(InfoShipping);
