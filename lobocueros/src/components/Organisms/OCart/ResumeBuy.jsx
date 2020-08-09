import React from "react";
import Buttons from "../../Atoms/AReusable/Buttons";

const ResumeBuy = () => {
  return (
    <div className="resume-buy-container">
      <div className="info-resume">
        <p className="title-info-resume">Resumen del pedido</p>
        <div>
          <p>Subtotal: <span>$300.000</span></p>
          <p>Envio: <span>Gratis</span></p>
          <p className="total">Total: <span>$300.000</span></p>
        </div>
        
      </div>
      <div className="button-resume">
        <Buttons type="Buy" text="Comprar"></Buttons>
      </div>
    </div>
  );
};

export default ResumeBuy