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
				<span>COMPRA 100% SEGURA</span>
			</div>
			<div className="item-info-buy-bar">
				<img src={Box}></img>
				<span>VENTAS POR MAYOR</span>
			</div>
			<div className="item-info-buy-bar">
				<img src={Envios}></img>
				<span>ENVÍOS GRÁTIS</span>
			</div>
			<div className="item-info-buy-bar">
				<img src={Dolar}></img>
				<span>DEVOLUCIONES SIN COSTO</span>
			</div>
		</div>
    )
}
export default InfoBuySection;