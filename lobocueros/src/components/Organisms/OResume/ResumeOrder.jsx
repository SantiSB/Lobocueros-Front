import React from "react";
import { connect } from "react-redux";
import { setVisibleMiniCart, changeEmail } from "../../../redux/actionsCreators";
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

  var md5 = require('md5');
  var signature = md5(`fD53F5TDb3c1sSDWHC1c7VdABt~900142~COMPRAPRUEBA~${total}~COP`)
  
  console.log("qwe", document.getElementById("cemail") != null ? document.getElementById("cemail").value : "jj" );

  return (
    <div className="resume-buy-container">
      <div className="info-resume">
        <p className="title-info-resume">Resumen del pedido</p>
        <div>
          <p>Subtotal: <span>${total}</span></p>
          <p>Envio: <span>Gratis</span></p>
          <p className="total">Total: <span>${total}</span></p>
          <p style={{fontSize: "8pt"}}>Impuestos incluidos</p>
        </div> 
        <form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu">
          <input name="merchantId"    type="hidden"  value="900142"></input>
          <input name="accountId"     type="hidden"  value="906774"></input>
          <input name="description"   type="hidden"  value="906774" ></input>
          <input name="referenceCode" type="hidden"  value="COMPRAPRUEBA" ></input>
          <input name="amount"        type="hidden"  value={total}   ></input>
          <input name="tax"           type="hidden"  value="0"  ></input>
          <input name="taxReturnBase" type="hidden"  value="0" ></input>
          <input name="currency"      type="hidden"  value="COP" ></input>
          <input name="signature"     type="hidden"  value={signature}  ></input>
          <input name="test"          type="hidden"  value="1" ></input>
          <input name="buyerEmail"    type="hidden"  value={props.valueEmail}></input>
          <input name="responseUrl"    type="hidden"  value="http://www.test.com/response" ></input>
          <input name="confirmationUrl" type="hidden"  value="http://www.test.com/confirmation" ></input> 
          <input name="Submit"        type="submit"  value="Enviar" ></input>
        </form>
      </div>

      <div className="button-resume">
        <Buttons type="Buy" text="Pagar"></Buttons>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  visibleMiniCart: state.visibleMiniCart,
  valueEmail: state.valueEmail
});
  
const mapDispatchToProps = {
  setVisibleMiniCart,
  changeEmail
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ResumeOrder);