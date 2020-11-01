import React from "react";
import Buttons from "../../Atoms/AReusable/Buttons";

const ResumeBuy = () => {

  if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) != [] && JSON.parse(localStorage.getItem('carrito')) != undefined){
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
        </div>
        
      </div>
      <div className="button-resume">
        <a href="/resumen"><Buttons type="Buy" text="Comprar"></Buttons></a>
      </div>
    </div>
  );
};

export default ResumeBuy