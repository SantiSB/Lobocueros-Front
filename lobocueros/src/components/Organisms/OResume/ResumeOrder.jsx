import React from "react";
import Buttons from "../../Atoms/AReusable/Buttons";

const ResumeOrder = () => { 

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
        
      </div>
      <div className="button-resume">
        <Buttons type="Buy" text="Pagar"></Buttons>
      </div>
    </div>
  );
};

export default ResumeOrder