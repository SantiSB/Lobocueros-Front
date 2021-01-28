import React, {useState, useEffect} from "react";
import axios from "axios"
import { connect } from "react-redux";
import { setVisibleMiniCart} from "../../../redux/actionsCreators";
import Button from '@material-ui/core/Button';
import Buttons from "../../Atoms/AReusable/Buttons";

const ResumeOrder = (props) => { 

  if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) !== [] && JSON.parse(localStorage.getItem('carrito')) !== undefined){
    var arrayItems = JSON.parse(localStorage.getItem('carrito'))
  }
  else{ 
    var arrayItems = []
  } 

  var valores = []
  const getValores = arrayItems.map(function(item) {
    valores.push(item.totalPrice)
  })

  let total = valores.reduce((a, b) => a + b, 0);

  const [apiKey, setApiKey] = useState("")
  const [merchantId, setMerchantId] = useState("")
  const [accountId, setAccountId] = useState("")
  const [random, setRandom] = useState("")

  axios
    .get(
      'https://lobocuerosapi.com/companyInformation/'      
    )
    .then((response) => {
      function esApiKey(element) { 
        return element.name == 'apikey-production';
      }
      function esMerchantId(element) { 
        return element.name == 'merchantId-production';
      }
      function esAccountId(element) { 
        return element.name == 'accountId-production';
      }
      setApiKey(response.data.results.find(esApiKey).value)
      setMerchantId(response.data.results.find(esMerchantId).value)
      setAccountId(response.data.results.find(esAccountId).value)
    })
    .catch((e) => {
    });

  var md5 = require('md5');
  // “ApiKey~merchantId~referenceCode~amount~currency”
  var signature = md5(`${apiKey}~${merchantId}~${random}~${total}~COP`)

  var priceTotal = 0
  
  const [pricee, setPricee] = useState(0)
  const [click, setClick] = useState(false)

  function validacion(){
    setRandom("LOBO"+(Math.random() * (999999999999999 - 1) + 1).toFixed(0))
    setClick(true)
    JSON.parse(localStorage.getItem('carrito')).forEach(item => {
      axios
      .get(
        `https://lobocuerosapi.com/products/${item.id}`
      )
      .then((response) => {        
        priceTotal += (response.data.price * item.udsItem)
        setPricee(priceTotal)
      })
      .catch((e) => {
      });
    })
  }
  
  if(pricee === total){
    if(click === true){
      document.getElementById("form").submit()
    }
  }

  const formatter = new Intl.NumberFormat('es-CO', {
		style: 'currency',
		currency: 'COP',
		minimumFractionDigits: 0
  })

  console.log("qwe", JSON.parse(localStorage.getItem('carrito')))

  var extra1 = ""
  var extra2 = ""
  var car = JSON.parse(localStorage.getItem('carrito'))
  var count = 0

  JSON.parse(localStorage.getItem('carrito')).map(function(item){
    var itemData = {
      'p': item.id,
      'v': item.price,
      'c': item.udsItem
    }
    count = count+1
  
    if(count <= 6){
      if(count == car.length){
        extra1 += "{" + "\'p\'" + ":" + "\'" + `${itemData.p}` + "\'" + "," + "\'v\'" + ":" + "\'" + `${itemData.v}` + "\'" + "," + "\'c\'" + ":" + "\'" + `${itemData.c}` + "\'" + "}"

      }
      else{
        extra1 += "{" + "\'p\'" + ":" + "\'" + `${itemData.p}` + "\'" + "," + "\'v\'" + ":" + "\'" + `${itemData.v}` + "\'" + "," + "\'c\'" + ":" + "\'" + `${itemData.c}` + "\'" + "}" + ","
      }
    }
    else if(count == 7){
      extra1 += "{" + "\'p\'" + ":" + "\'" + `${itemData.p}` + "\'" + "," + "\'v\'" + ":" + "\'" + `${itemData.v}` + "\'" + "," + "\'c\'" + ":" + "\'" + `${itemData.c}` + "\'" + "}"
    }
    else if(count > 7 && count <= 13){
      if(count == car.length){
        extra2 += "{" + "\'p\'" + ":" + "\'" + `${itemData.p}` + "\'" + "," + "\'v\'" + ":" + "\'" + `${itemData.v}` + "\'" + "," + "\'c\'" + ":" + "\'" + `${itemData.c}` + "\'" + "}"

      }
      else{
        extra2 += "{" + "\'p\'" + ":" + "\'" + `${itemData.p}` + "\'" + "," + "\'v\'" + ":" + "\'" + `${itemData.v}` + "\'" + "," + "\'c\'" + ":" + "\'" + `${itemData.c}` + "\'" + "}" + ","

      }
    }
    else if(count > 7 && count == 14){
      extra2 += "{" + "\'p\'" + ":" + "\'" + `${itemData.p}` + "\'" + "," + "\'v\'" + ":" + "\'" + `${itemData.v}` + "\'" + "," + "\'c\'" + ":" + "\'" + `${itemData.c}` + "\'" + "}"
    }

    
  })

  var textExtra1 = "[" + extra1 +"]"
  var textExtra2 = "[" + extra2 +"]"

  

  console.log("qwe1", textExtra1)
  console.log("qwe2", textExtra2)


  return (
    <div className="resume-buy-container">
      <div className="info-resume">
        <p className="title-info-resume">Resumen del pedido</p>
        <div>
          <p>Subtotal: <span>{formatter.format(total)}</span></p>
          <p>Envio: <span>Gratis</span></p>
          <p className="total">Total: <span>{formatter.format(total)}</span></p>
          <p style={{fontSize: "8pt"}}>Impuestos incluidos</p>
        </div> 
        {/* <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
          <input name="merchantId"    type="hidden"  value="508029"  ></input>
          <input name="accountId"     type="hidden"  value="512321"></input>
          <input name="description"   type="hidden"  value="Test PAYU" ></input>
          <input name="referenceCode" type="hidden"  value="TestPayU"></input>
          <input name="amount"        type="hidden"  value="20000"  ></input>
          <input name="tax"           type="hidden"  value="3193" ></input>
          <input name="taxReturnBase" type="hidden"  value="16806"></input>
          <input name="currency"      type="hidden"  value="COP"></input>
          <input name="signature"     type="hidden"  value="7ee7cf808ce6a39b17481c54f2c57acc" ></input>
          <input name="test"          type="hidden"  value="1"></input>
          <input name="buyerEmail"    type="hidden"  value="test@test.com"></input>
          <input name="responseUrl"    type="hidden"  value="http://localhost:3000/resultado-compra"></input>
          <input name="confirmationUrl"    type="hidden"  value="http://www.test.com/confirmation"></input>
          <input name="Submit"        type="submit"  value="Enviar"></input>
        </form> */}
        <form method="post" id="form" action="https://checkout.payulatam.com/ppp-web-gateway-payu/">
          <input name="merchantId"    type="hidden"  value={merchantId}   ></input>
          <input name="accountId"     type="hidden"  value={accountId} ></input>
          <input name="description"   type="hidden"  value="Compra Lobocueros"  ></input>
          <input name="referenceCode" type="hidden"  value={random} ></input>

          <input name="tax"           type="hidden"  value="0"  ></input>
          <input name="taxReturnBase" type="hidden"  value="0" ></input>
          <input name="currency"      type="hidden"  value="COP" ></input>

          <input name="test"          type="hidden"  value="0" ></input>

          <input name="signature"     type="hidden"  value={signature}  ></input>
          <input name="buyerEmail"    type="hidden"  value={props.valueEmail} ></input>
          <input name="amount"        type="hidden"  value={total}   ></input>
          <input name="buyerFullName"    type="hidden"  value={props.valueFullName} ></input>
          <input name="shippingAddress"    type="hidden"  value={props.shippingAddress} ></input>
          <input name="shippingCity"    type="hidden"  value={props.shippingCity} ></input>
          <input name="shippingCountry"    type="hidden"  value="CO" ></input>
          <input name="telephone"    type="hidden"  value={props.telephone} ></input>
          <input name="extra1"    type="hidden"  value={textExtra1} ></input>
          <input name="extra2"    type="hidden"  value={textExtra2} ></input>
          <input name="responseUrl"    type="hidden"  value="http://localhost:3000/resultado-compra" ></input>
          <input name="confirmationUrl"    type="hidden"  value="http://www.test.com/confirmation" ></input>
          {
            props.sendBuy == true ? <Button name="Submit" onClick={validacion} value="Enviar" variant="contained" color="secondary" >PAGAR</Button> : <Button variant="contained" disabled >PAGAR</Button>
          }
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  visibleMiniCart: state.visibleMiniCart,
  valueEmail: state.valueEmail,
  valueFullName: state.valueFullName,
  shippingAddress: state.valueShippingAddress,
  shippingCity: state.valueShippingCity,
  telephone: state.valueTelephone,
  sendBuy: state.sendBuy
});
  
const mapDispatchToProps = {
  setVisibleMiniCart,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ResumeOrder);