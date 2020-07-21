import React from 'react';
import ColorsBar from '../../Molecules/MReusable/ColorsBar';


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
				<button>Count</button>
				<button>Count</button>
				
			</div>
		</div>
    )
}
export default InfoProductDetail;