import React from "react";

const CounterItems = () => {

  if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) !== [] && JSON.parse(localStorage.getItem('carrito')) !== undefined){
    var arrayItems = JSON.parse(localStorage.getItem('carrito'))
  }
  else{
    var arrayItems = []
  }

  return (
    <div  className="container-counter">
      <p>Carrito ({arrayItems.length})</p> 
    </div>
  );
};

export default CounterItems
