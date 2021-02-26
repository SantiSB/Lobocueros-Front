import React, {useState} from 'react';
import ColorsBar from '../../Molecules/MReusable/ColorsBar';
import Buttons from '../../Atoms/AReusable/Buttons';
import Counter from '../../Atoms/AReusable/Counter';
import { connect} from "react-redux";
import { setCounter } from "../../../redux/actionsCreators";

const InfoProductDetail = (props) => {

	const [colorSelected, setColorSelected] = useState("");
	const [counter, setCounter] = useState(1);
	
	const countMore = (event) =>{
		setCounter(counter+1)
	}

	const countLess = (event) =>{
		if(counter > 1){
			setCounter(counter-1)
		}

	}
	
	const changeColorSelected = (color) =>{
		setColorSelected(color)
	}

	if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) !== [] && JSON.parse(localStorage.getItem('carrito')) !== undefined){
		var carritoActual = JSON.parse(localStorage.getItem('carrito'))
	}
	else{
		var carritoActual = []
	}

	const buyEventsBuy = (item) => {
		
		if(colorSelected === ""){
			document.getElementById("select-color").style.display = "block"
		}
		else{
			function inCart(e){
				return e.id === item.id && e.colorSelected === colorSelected;
			}
			if(carritoActual.find(inCart)){
				return null 
			}
			else{
				item['colorSelected']  = colorSelected;
				item['udsItem'] = counter;
				item['totalPrice'] = counter * item.price;
				carritoActual.push(item)
				localStorage.setItem('carrito', JSON.stringify(carritoActual));
			}
		}
	}

	const buyEvents = (item) => {
		if(colorSelected === ""){
			document.getElementById("select-color").style.display = "block"
		}
		else{
			function inCart(e){
				return e.id === item.id && e.colorSelected === colorSelected;
			}
			if(carritoActual.find(inCart)){
				document.getElementById("product-exist").style.display = "block"
			}
			else if(JSON.parse(localStorage.getItem('carrito')).length >= 10){
				document.getElementById("max-products").style.display = "block"
			}
			else{
				item['colorSelected']  = colorSelected;
				item['udsItem'] = counter; 
				item['totalPrice'] = counter * item.price;
				carritoActual.push(item)
				localStorage.setItem('carrito', JSON.stringify(carritoActual));
				window.location.reload()
			}
		}
	}

	const buildBtn = () =>{
		if(colorSelected === ""){
			return <a onClick={()=>buyEventsBuy(props.productDetail)}><Buttons type="Buy" text="Comprar"></Buttons></a> 			 
		}
		else{
			return <a onClick={()=>buyEventsBuy(props.productDetail)} href="/carrito"><Buttons type="Buy" text="Comprar"></Buttons></a>
		}
	} 
	const formatter = new Intl.NumberFormat('es-CO', {
		style: 'currency',
		currency: 'COP',
		minimumFractionDigits: 0
	})
	
    return(  
		<>
			{
				props.productDetail.reference 
				? 	<div className="info-product-detail">
						<div className="ref-product">
							Ref.{props.productDetail.reference}
						</div>
						<div className="title-product">
							{props.productDetail.title}
						</div>
						<div className="price-product">
							<span className="old-value">{formatter.format(props.productDetail.price + props.productDetail.price * 0.25)}</span><span>{formatter.format(props.productDetail.price)}</span>
						</div>
						<div className="description-product"> 
							{props.productDetail.description}
						</div>
			
						<div className="actions-product-detail"> 
							<p id="select-color" className="select-color">Selecciona el color</p>				
							<ColorsBar productDetail={props.productDetail} changeColor={changeColorSelected}></ColorsBar>
						</div>
						<div className="buttons-product-detail">
							<div className="counter">
								<Counter countMore={countMore} countLess={countLess} count={counter}></Counter>
							</div>
							<div className="buy-buttons">
								{buildBtn()}
								<a onClick={()=>buyEvents(props.productDetail)} ><Buttons type="Add" text="Agregar al Carrito"></Buttons></a>
							</div>
							<p id="product-exist" className="product-exist">El producto ya está en el carrito</p>
							<p id="max-products" className="product-exist">Puedes comprar maximo 10 productos por cada transacción</p>
						</div>
						
					</div>
			
				:	""
			}
		</>
    )
}

const mapStateToProps = (state) => ({
	counter: state.counter
});
const mapDispatchToProps = {
	setCounter
};
  
export default connect(mapStateToProps, mapDispatchToProps)(InfoProductDetail);