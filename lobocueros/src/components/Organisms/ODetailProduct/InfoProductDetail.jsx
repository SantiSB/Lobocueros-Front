import React from 'react';
import ColorsBar from '../../Molecules/MReusable/ColorsBar';
import Buttons from '../../Atoms/AReusable/Buttons';
import Counter from '../../Atoms/AReusable/Counter';
import { connect} from "react-redux";
import { setItemsInCart } from "../../../redux/actionsCreators";

const InfoProductDetail = (props) => {
	const buyEvents = () => {
		var itemsAdd = []
		itemsAdd.push(props.productDetail)
		props.setItemsInCart(itemsAdd)
	}
	React.useEffect(()=>{
		console.log("qwe", props.itemsInCart)
	})
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
					<a onClick={()=>buyEvents()} href="/carrito"><Buttons type="Buy" text="Comprar"></Buttons></a>
					<a ><Buttons type="Add" text="Agregar al Carrito"></Buttons></a>
				</div>
			</div>
			
		</div>
    )
}

const mapStateToProps = (state) => ({
	itemsInCart: state.itemsInCart,
});
const mapDispatchToProps = {
	setItemsInCart,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(InfoProductDetail);