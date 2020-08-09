import React from "react";
import Failed from '../../../assets/Icons/Failed.svg'
import Buttons from "../../Atoms/AReusable/Buttons";

const PurchaseFalse = () => {
  return (
    <div className="container-purchase-true">
      <div className="title-purchase">
        <i><img src={Failed}></img></i>
        <p>Compra Fallida</p>
      </div>
      <div className="list-products-purchase">
        <p>Hubo un error al procesar tu pago</p>
        <p>¿Que puedo hacer?</p>
        <p>Usa otra tarjeta u otro medio de pago</p>
      </div>
      <div className="btn-purchase-container">
        <Buttons type="PayAgain" text="Pagar con otro medio"></Buttons>
      </div>
    </div>
  );
};

export default PurchaseFalse