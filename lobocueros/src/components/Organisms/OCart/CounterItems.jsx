import React from "react";

const CounterItems = () => {

  var arrayItems = []

  if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) !== [] && JSON.parse(localStorage.getItem('carrito')) !== undefined){
    arrayItems = JSON.parse(localStorage.getItem('carrito'))
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
