import React from 'react';
import ColorBtn from './ColorBtn';

const InfoItemBuy = (props) => {
    const item = props.item != null ? props.item : {} 
    return (
        <div> 
            <p>{item.title}</p>
            <p>Precio: <span>${item.price}</span></p>
            <p>Color: <span> <ColorBtn codeColor={item.colorSelected}></ColorBtn> </span></p>
            <p>Unidades: <span>{item.udsItem}</span></p>
            <p>Total: <span>{item.totalPrice}</span></p>
        </div>

    )
}
export default InfoItemBuy;