import React from 'react';
import { connect } from "react-redux";
import { setVisibleMiniCart } from "../../../redux/actionsCreators";
import MiniCar from '../../../assets/Icons/MiniCar.svg'
import Close from '../../../assets/Icons/Failed.svg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ItemMiniCart from '../../Molecules/MMiniCart/ItemMiniCart';

const useStyles = makeStyles((theme) => ({
	btnBuy: {
		color: "#ffffff",
		border: "1px solid #ffffff",
		background: "#DA2727",
		opacity: ".7",
		borderRadius: "100px",
	}, 
  }));
  var arrayItems = []
	const MiniCart = (props) => { 
		if( JSON.parse(sessionStorage.getItem('carrito')) && JSON.parse(sessionStorage.getItem('carrito')) !== [] && JSON.parse(sessionStorage.getItem('carrito')) !== undefined){
			arrayItems = JSON.parse(sessionStorage.getItem('carrito'))
		}
		else{
			arrayItems = []
		}


	const classes = useStyles();
    return(
		<>
			<i className="mini-cart-icon" onClick={()=>props.setVisibleMiniCart(props.visibleMiniCart === false ? true : false)}><img src={MiniCar} alt="mini-cart"></img></i>
			<div id="miniCart" className="container-mini-cart" style={props.visibleMiniCart === false ? {display: "none"} : {display: "block"}}>
				<div className="close-mini-cart">
					<i onClick={()=>props.setVisibleMiniCart(props.visibleMiniCart === false ? true : false)}><img alt="close" src={Close}></img></i>
				</div>
				<hr></hr>
				<div className="list-products-mini-cart">
					{
						arrayItems.length>0 ? arrayItems.map(function(item, index){
							return (
								<ItemMiniCart item={item} index={index} key={index}></ItemMiniCart> 
							)
						}) 
						: <h4>EL CARRITO ESTÁ VACIO</h4>
					}
				</div>
				
				<div className="btn-buy-mini-cart">
					<a href="/carrito"><Button className={classes.btnBuy} variant="outlined">COMPRAR</Button></a>
				</div>
			</div>
		</>
    )
}

const mapStateToProps = (state) => ({
	visibleMiniCart: state.visibleMiniCart,
});
  
const mapDispatchToProps = {
	setVisibleMiniCart,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);