import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ColorsBar from '../../Molecules/MReusable/ColorsBar';
import Bolso from '../../../assets/Images/Bolso.fw.png'
import Buttons from '../../Atoms/AReusable/Buttons';

const ProductCard = () => {
    return(
		<Card className="product-card">
			<CardActionArea className="card-action-area">
				<CardContent className="card-content">
					<div className="image-product-card">
						<img src={Bolso}></img>
					</div>
					<div className="title-product-card">
						<h2>Titulo del Producto</h2>
					</div>
					<div className="price-product-card">
						<span className="old-value">$150.000</span><span>$100.000</span>
					</div>
					
				</CardContent>
			</CardActionArea>
			<CardActions className="card-actions">
				<div className="product-card-actions">
					<div className="colors-product-card">
						<ColorsBar></ColorsBar>
					</div>
					<div className="buy-produt-card">
						<Buttons type="Add" text="Agregar al Carrito"></Buttons>
					</div>
				</div>
			</CardActions>
		</Card>
    )
}
export default ProductCard;