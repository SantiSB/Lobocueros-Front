import React from 'react';
import ColorBtn from './ColorBtn';

const InfoItemBuy = (props) => {
    return (
        <div> 
            <p>{props.item.title}</p>
            <p>Precio: <span>${props.item.price}</span></p>
            <p>Color: <span> <ColorBtn codeColor={props.item.colorSelected}></ColorBtn> </span></p>
            <p>Unidades: <span>{props.item.udsItem}</span></p>
            <p>Total: <span>{props.item.totalPrice}</span></p>
        </div>

    )
}
export default InfoItemBuy;