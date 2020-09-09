import React from 'react';
import Button from '@material-ui/core/Button';
import ColorsBar from '../../Molecules/MReusable/ColorsBar';
import Buttons from '../../Atoms/AReusable/Buttons';
import Counter from '../../Atoms/AReusable/Counter';

const InfoProductDetail = () => {
    return(
		<div className="info-product-detail">
			<div className="ref-product">
				Ref.1234
			</div>
			<div className="title-product">
				MORRAL DE CUERO CON CORREA
			</div>
			<div className="price-product">
				<span className="old-value">$150.000</span><span>$100.000</span>
			</div>
			<div className="description-product">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae esse repudiandae ducimus ea ex recusandae quia sed maiores consectetur molestias quos, omnis beatae voluptate, natus facilis quis necessitatibus eveniet quaerat.
				
			</div>
			<div className="actions-product-detail">
				<ColorsBar></ColorsBar>
				
			</div>
			<div className="buttons-product-detail">
				<div className="counter">
					<Counter></Counter>
				</div>
				
				<div className="buy-buttons">
					<a href="/carrito"><Buttons type="Buy" text="Comprar"></Buttons></a>
					<a href="/carrito"><Buttons type="Add" text="Agregar al Carrito"></Buttons></a>
				</div>
			</div>
			
		</div>
    )
}
export default InfoProductDetail;