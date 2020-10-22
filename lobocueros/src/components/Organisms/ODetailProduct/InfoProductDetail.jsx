import React, {useState} from 'react';
import ColorsBar from '../../Molecules/MReusable/ColorsBar';
import Buttons from '../../Atoms/AReusable/Buttons';
import Counter from '../../Atoms/AReusable/Counter';
import { connect} from "react-redux";
// import { setItemsInCart } from "../../../redux/actionsCreators";

const InfoProductDetail = (props) => {

	const [colorSelected, setColorSelected] = useState("");
	console.log("qas", colorSelected)
	
	const changeColorSelected = (color) =>{
		setColorSelected(color)
	}

	if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) != [] && JSON.parse(localStorage.getItem('carrito')) != undefined){
		var carritoActual = JSON.parse(localStorage.getItem('carrito'))
	}
	else{
		var carritoActual = []
	}

	const buyEventsBuy = (item) => {
		if(colorSelected == ""){
			alert("Selecciona el color");
		}
		else{
			function inCart(e){
				return e.id == item.id;
			}
			if(carritoActual.find(inCart)){
				return null
			}
			else{
				carritoActual.push(item)
				localStorage.setItem('carrito', JSON.stringify(carritoActual));
			}
		}
	}

	const buyEvents = (item) => {
		if(colorSelected == ""){
			alert("Selecciona el color");
		}
		else{
			function inCart(e){
				return e.id == item.id;
			}
			if(carritoActual.find(inCart)){
				alert("El producto ya está en el carrito");
			}
			else{
				carritoActual.push(item)
				localStorage.setItem('carrito', JSON.stringify(carritoActual));
			}
		}
	}


	
	
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
				<ColorsBar productDetail={props.productDetail} changeColor={changeColorSelected}></ColorsBar>
			</div>
			<div className="buttons-product-detail">
				<div className="counter">
					<Counter></Counter>
				</div>
				
				<div className="buy-buttons">
					<a onClick={()=>buyEventsBuy(props.productDetail)} href={colorSelected == "" ? "" : "/carrito"}><Buttons type="Buy" text="Comprar"></Buttons></a>
					<a onClick={()=>buyEvents(props.productDetail)} ><Buttons type="Add" text="Agregar al Carrito"></Buttons></a>
				</div>
			</div>
			
		</div> 
    )
}

const mapStateToProps = (state) => ({
	itemsInCart: state.itemsInCart,
});
const mapDispatchToProps = {
	// setItemsInCart,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(InfoProductDetail);