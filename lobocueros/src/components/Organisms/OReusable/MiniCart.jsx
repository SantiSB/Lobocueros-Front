import React from 'react';
import MiniCar from '../../../assets/Icons/MiniCar.svg'
import Close from '../../../assets/Icons/Failed.svg'
import Bolso from '../../../assets/Images/Bolso.fw.png'
import Mas from '../../../assets/Icons/Mas.svg'
import Menos from '../../../assets/Icons/Menos.svg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	btnBuy: {
		color: "#ffffff",
		border: "1px solid #ffffff",
		background: "#DA2727",
		opacity: ".7",
		borderRadius: "100px",
	},
  }));


const MiniCart = () => {
	const classes = useStyles();
	
    return(
		<>
			<i className="mini-cart-icon"><img src={MiniCar} alt="mini-cart"></img></i>
			<div id="miniCart" className="container-mini-cart">
				<div className="close-mini-cart">
					<i><img src={Close}></img></i>
				</div>
				<hr></hr>
				<div className="list-products-mini-cart">
					<div className="item-mini-cart">
						<div className="image-item-buy">
							<img src={Bolso}></img>
						</div>
						<div className="info-item-buy">
							<div>
								<p>MORRAL DE CUERO CON CORREA</p>
								<p>Precio: <span>$100.000</span></p>
								<p>Color: <span></span></p>
								<p>Tiempo de entrega 3 a 5 Días</p>
							</div>
						</div>
						<div className="buttons-item-buy">
							<div className="counter-btn-container">
								<button><i><img src={Menos}></img></i></button>
								<span>1</span>
								<button><i><img src={Mas}></img></i></button>
							</div>
						</div>
					</div>

					<div className="item-mini-cart">
						<div className="image-item-buy">
							<img src={Bolso}></img>
						</div>
						<div className="info-item-buy">
							<div>
								<p>MORRAL DE CUERO CON CORREA</p>
								<p>Precio: <span>$100.000</span></p>
								<p>Color: <span></span></p>
								<p>Tiempo de entrega 3 a 5 Días</p>
							</div>
						</div>
						<div className="buttons-item-buy">
							<div className="counter-btn-container">
								<button><i><img src={Menos}></img></i></button>
								<span>1</span>
								<button><i><img src={Mas}></img></i></button>
							</div>
						</div>
					</div>

					<div className="item-mini-cart">
						<div className="image-item-buy">
							<img src={Bolso}></img>
						</div>
						<div className="info-item-buy">
							<div>
								<p>MORRAL DE CUERO CON CORREA</p>
								<p>Precio: <span>$100.000</span></p>
								<p>Color: <span></span></p>
								<p>Tiempo de entrega 3 a 5 Días</p>
							</div>
						</div>
						<div className="buttons-item-buy">
							<div className="counter-btn-container">
								<button><i><img src={Menos}></img></i></button>
								<span>1</span>
								<button><i><img src={Mas}></img></i></button>
							</div>
						</div>
					</div>
					
				</div>
				<hr></hr>
				<div className="btn-buy-mini-cart">
					<Button className={classes.btnBuy} variant="outlined">COMPRAR</Button>
				</div>
			</div>
		</>
    )
}
export default MiniCart;