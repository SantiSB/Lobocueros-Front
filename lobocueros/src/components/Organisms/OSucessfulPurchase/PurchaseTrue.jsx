import React from "react";
import Accepted from '../../../assets/Icons/Accepted.svg'
import OrderListItem from "../../Molecules/MReusable/OrderListItem";
import Buttons from "../../Atoms/AReusable/Buttons";

const PurchaseTrue = () => {
  return (
    <div className="container-purchase-true">
      <div className="title-purchase">
        <i><img alt="acepted" src={Accepted}></img></i>
        <p>Compra Exitosa</p>
      </div>
      <div className="list-products-purchase">
        <div>
          <OrderListItem></OrderListItem>
          <OrderListItem></OrderListItem>
          <OrderListItem></OrderListItem>
        </div>
      </div>
      <div className="btn-purchase-container">
        <a href="/productos"><Buttons type="PayAgain" text="Seguir Comprando"></Buttons></a>
      </div>
    </div>
  );
};

export default PurchaseTrue