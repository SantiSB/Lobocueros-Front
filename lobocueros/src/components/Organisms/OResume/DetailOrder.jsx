import React from "react";
import Bolso from '../../../assets/Images/Bolso.fw.png'
import OrderListItem from "../../Molecules/MReusable/OrderListItem";

const DetailOrder = () => {
  return (
    <>
      <div className="items-order">
        <p className="title-steep">Paso 3 de 3</p>
        <p className="subtitle-steep">Verificar detalles del pedido</p>
        <OrderListItem></OrderListItem>
        <OrderListItem></OrderListItem>
        <OrderListItem></OrderListItem>
      </div>
      
    </>
  );
};

export default DetailOrder