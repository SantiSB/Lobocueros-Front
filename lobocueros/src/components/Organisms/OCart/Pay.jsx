import React from "react";
import Secure from "../../../assets/Icons/Secure.svg"

const Pay = () => {
  return (
    <div className="pay-container">
      {/* <div className="methods-pay">
        <p className="pay-methods-title">MÉTODOS DE PAGO</p>
        <div className="pay-methods-icons">
          <i><img alt="secure" src={Secure}></img></i>
          <i><img alt="secure" src={Secure}></img></i>
          <i><img alt="secure" src={Secure}></img></i>
          <i><img alt="secure" src={Secure}></img></i>
          <i><img alt="secure" src={Secure}></img></i>
        </div>
      </div> */}
      <div className="secure-pay">
        <div className="secure-pay-title">
          <i><img alt="secure" src={Secure}></img></i>
          <p>COMPRA 100% SEGURA</p>

        </div>
        <div className="secure-pay-info">
          <p>Recibe un reembolso completo de tu dinero si el articulo no llega o es diferente al de la descripción</p>
        </div>
      </div>
    </div>
  );
};

export default Pay