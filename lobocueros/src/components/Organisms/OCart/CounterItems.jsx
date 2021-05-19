import React from "react";

const CounterItems = () => {

  var arrayItems = []

  if( JSON.parse(sessionStorage.getItem('carrito')) && JSON.parse(sessionStorage.getItem('carrito')) !== [] && JSON.parse(sessionStorage.getItem('carrito')) !== undefined){
    arrayItems = JSON.parse(sessionStorage.getItem('carrito'))
  }
  else{
    arrayItems = []
  }

  return (
    <div  className="container-counter">
      <p>Carrito ({arrayItems.length})</p> 
    </div>
  );
};

export default CounterItems
