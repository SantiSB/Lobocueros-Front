import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ColorsBar from '../../Molecules/MReusable/ColorsBar';
import Bolso from '../../../assets/Images/Bolso.fw.png'
import Buttons from '../../Atoms/AReusable/Buttons';

const ProductCard = (props) => {

	const buildMainPicture = (pictures) => {
		function isMain(picture){
			return picture.mainPicture == true
		}
		return pictures.find(isMain).img
	} 

    return( 
		<Card className="product-card" >
			<CardActionArea className="card-action-area" >
				<CardContent className="card-content" >
					<a href={`/productos/${props.item.id}`}> 
						<div className="image-product-card" >
							<img src={buildMainPicture(props.item.pictures)}></img>
						</div>
						<div className="title-product-card">
							<h2>{props.item.title}</h2>
						</div>
						<div className="price-product-card">
							<span className="old-value">{props.productDetail.price + props.productDetail.price*0.25}</span><span>{props.item.price}</span>
						</div>
					</a>
				</CardContent>
			</CardActionArea>
			<CardActions className="card-actions">
				<div className="product-card-actions">
					<div className="colors-product-card">
						<ColorsBar colors={props.item.colors}></ColorsBar>
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