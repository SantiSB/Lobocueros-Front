import React from 'react';
import Bolso from '../../../assets/Images/Bolso.fw.png'

const OrderListItem = () => {
    return(
		<div className="item">
          <div className="image-item-order">
            <img src={Bolso}></img>
          </div>
          <div className="info-item-order">
            <div>
              <p>MORRAL DE CUERO CON CORREA</p>
              <p>Precio: <span>$100.000</span></p>
              <p>Color: <span></span></p>
              <p>Cantidad: <span>1</span></p>
              <p>Tiempo de entrega 3 a 5 Días</p>
            </div>
          </div>
        </div>
		
    )
}
export default OrderListItem;