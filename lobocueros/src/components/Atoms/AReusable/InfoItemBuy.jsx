import React from 'react';
import ColorBtn from './ColorBtn';

const InfoItemBuy = (props) => {
    const item = props.item != null ? props.item : {} 

    const formatter = new Intl.NumberFormat('es-CO', {
		style: 'currency',
		currency: 'COP',
		minimumFractionDigits: 0
    })
    
    return (
        <div> 
            <p id="item-title">{item.title}</p>
            <p>Precio: <span>{formatter.format(item.price)}</span></p>
            <p>Color: <span> <ColorBtn codeColor={item.colorSelected}></ColorBtn> </span></p>
            <p>Unidades: <span>{item.udsItem}</span></p>
            <p>Total: <span>{item.totalPrice}</span></p>
        </div>

    )
}
export default InfoItemBuy;