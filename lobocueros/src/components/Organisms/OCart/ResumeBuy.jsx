import React from "react";
import { connect } from "react-redux";
import { sendBuy } from "../../../redux/actionsCreators";
import Buttons from "../../Atoms/AReusable/Buttons";

const ResumeBuy = (props) => {

  if( JSON.parse(sessionStorage.getItem('carrito')) && JSON.parse(sessionStorage.getItem('carrito')) !== [] && JSON.parse(sessionStorage.getItem('carrito')) !== undefined){
    var arrayItems = JSON.parse(sessionStorage.getItem('carrito'))
  }
  else{
    var arrayItems = []
  } 

  var valores = []
  arrayItems.map(function(item) {
    return valores.push(item.totalPrice)
  })

  let total = valores.reduce((a, b) => a + b, 0);

  const formatter = new Intl.NumberFormat('es-CO', {
		style: 'currency',
		currency: 'COP',
		minimumFractionDigits: 0
  })
  
  return (
    <div className="resume-buy-container">
      <div className="info-resume">
        <p className="title-info-resume">Resumen del pedido</p>
        <div>
        <p>Subtotal: <span>{formatter.format(total)}</span></p>
          <p>Envio: <span>Gratis</span></p>
          <p className="total">Total: <span>{formatter.format(total)}</span></p>
        </div>
        
      </div>
      <div className="button-resume">
        <a href="/resumen" ><Buttons type="Buy" text="Comprar"></Buttons></a>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  sendBuy: state.sendBuy
});
  
const mapDispatchToProps = {
  sendBuy
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ResumeBuy);