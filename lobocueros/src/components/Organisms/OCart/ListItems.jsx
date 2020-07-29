import React from "react";
import Bolso from '../../../assets/Images/Bolso.fw.png'
import Trash from '../../../assets/Icons/Trash.svg'
import Mas from '../../../assets/Icons/Mas.svg'
import Menos from '../../../assets/Icons/Menos.svg'

const ListItems = () => {
  return (
    <>
      <div className="item-buy">
        <div className="checkbox-item-buy">
          <input type="checkbox" id="checkbox" value="checkbox"></input>
        </div>
        <div className="image-item-buy">
          <img src={Bolso}></img>
        </div>
        <div className="info-item-buy">
          <div>
            <p>MORRAL DE CUERO CON CORREA</p>
            <p>Precio: <span>$100.000</span></p>
            <p>Color: <span></span></p>
            <p>Tiempo de entrega 3 a 5 Días</p>
          </div>
        </div>
        <div className="buttons-item-buy">
          <div className="trash-btn-container">
            <button><i><img src={Trash}></img></i></button>
          </div>
          <div className="counter-btn-container">
            <button><i><img src={Menos}></img></i></button>
            <span>1</span>
            <button><i><img src={Mas}></img></i></button>
          </div>
        </div>


        <div className="checkbox-item-buy">
          <input type="checkbox" id="checkbox" value="checkbox"></input>
        </div>
        <div className="image-item-buy">
          <img src={Bolso}></img>
        </div>
        <div className="info-item-buy">
          <div>
            <p>MORRAL DE CUERO CON CORREA</p>
            <p>Precio: <span>$100.000</span></p>
            <p>Color: <span></span></p>
            <p>Tiempo de entrega 3 a 5 Días</p>
          </div>
        </div>
        <div className="buttons-item-buy">
          <div className="trash-btn-container">
            <button><i><img src={Trash}></img></i></button>
          </div>
          <div className="counter-btn-container">
            <button><i><img src={Menos}></img></i></button>
            <span>1</span>
            <button><i><img src={Mas}></img></i></button>
          </div>
        </div>

        <div className="checkbox-item-buy">
          <input type="checkbox" id="checkbox" value="checkbox"></input>
        </div>
        <div className="image-item-buy">
          <img src={Bolso}></img>
        </div>
        <div className="info-item-buy">
          <div>
            <p>MORRAL DE CUERO CON CORREA</p>
            <p>Precio: <span>$100.000</span></p>
            <p>Color: <span></span></p>
            <p>Tiempo de entrega 3 a 5 Días</p>
          </div>
        </div>
        <div className="buttons-item-buy">
          <div className="trash-btn-container">
            <button><i><img src={Trash}></img></i></button>
          </div>
          <div className="counter-btn-container">
            <button><i><img src={Menos}></img></i></button>
            <span>1</span>
            <button><i><img src={Mas}></img></i></button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ListItems