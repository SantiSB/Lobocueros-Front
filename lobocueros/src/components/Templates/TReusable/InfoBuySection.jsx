import React from 'react';
import Secure from '../../../assets/Icons/Secure.svg'
import Box from '../../../assets/Icons/Box.svg'
import Envios from '../../../assets/Icons/Envios.svg'
import Dolar from '../../../assets/Icons/Dolar.svg'

const InfoBuySection = () => {
    return(
        <div className="info-buy-bar">
			<div className="item-info-buy-bar">
				<img src={Secure}></img>
				<span> <a href="" target="_blank">COMPRA 100% SEGURA</a></span>
			</div>
			<div className="item-info-buy-bar">
				<img src={Box}></img>
				<span><a href="" target="_blank">VENTAS POR MAYOR</a></span>
			</div>
			<div className="item-info-buy-bar">
				<img src={Envios}></img>
				<span><a href="" target="_blank">ENVÍOS GRÁTIS</a></span>
			</div>
			<div className="item-info-buy-bar">
				<img src={Dolar}></img>
				<span><a href="" target="_blank">DEVOLUCIONES SIN COSTO</a></span>
			</div>
		</div>
    )
}
export default InfoBuySection;