import React from 'react';
import Button from '@material-ui/core/Button';
import ColorsBar from '../../Molecules/MReusable/ColorsBar';
import Buttons from '../../Atoms/AReusable/Buttons';
import Counter from '../../Atoms/AReusable/Counter';

const InfoProductDetail = (props) => {
    return( 
		<div className="info-product-detail">
			<div className="ref-product">
				Ref.{props.productDetail.reference}
			</div>
			<div className="title-product">
				{props.productDetail.title}
			</div>
			<div className="price-product">
				<span className="old-value">{props.productDetail.price + props.productDetail.price*0.25}</span><span>{props.productDetail.price}</span>
			</div>
			<div className="description-product"> 
				{props.productDetail.description}
			</div>
			<div className="actions-product-detail"> 
				<ColorsBar productDetail={props.productDetail}></ColorsBar>
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