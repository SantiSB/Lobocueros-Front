import React from "react";
import OrderListItem from "../../Molecules/MReusable/OrderListItem";

const DetailOrder = () => {

  if( JSON.parse(sessionStorage.getItem('carrito')) && JSON.parse(sessionStorage.getItem('carrito')) !== [] && JSON.parse(sessionStorage.getItem('carrito')) !== undefined){
    var arrayItems = JSON.parse(sessionStorage.getItem('carrito'))
  }
  else{
    var arrayItems = []
  } 

  return (
    <>
      <div className="items-order">
        <p className="title-steep">Paso 2 de 3</p>
        <p className="subtitle-steep">Verificar detalles del pedido</p>
        <p>Tiempo de entrega: 3 a 5 dias</p>
        {
        arrayItems ? arrayItems.map(function(item, index){
          return <OrderListItem item={item} index={index} key={index}></OrderListItem>
        } 
        ) 
        : []
        }

      </div>
      
    </>
  );
};

export default DetailOrder