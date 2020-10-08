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
		if(pictures != null){
			return pictures.find(isMain).img
		}
	} 
	const itemProduct = props.item != null ? props.item : {}
    return( 
		<Card className="product-card" >
			<CardActionArea className="card-action-area" >
				<CardContent className="card-content" >
					<a href={`/productos/${itemProduct.id}`}> 
						<div className="image-product-card" >
							<img src={buildMainPicture(itemProduct.pictures)}></img>
						</div>
						<div className="title-product-card">
							<h2>{itemProduct.title}</h2>
						</div>
						<div className="price-product-card">
							<span className="old-value">{itemProduct.price + itemProduct.price*0.25}</span><span>{itemProduct.price}</span>
						</div>
					</a>
				</CardContent>
			</CardActionArea>
			<CardActions className="card-actions">
				<a href={`/productos/${itemProduct.id}`}>
					<div className="product-card-actions">
						<div className="colors-product-card">
							<ColorsBar productDetail={itemProduct}></ColorsBar>
						</div>
						<div className="buy-produt-card">
							<Buttons type="Add" text="Agregar al Carrito"></Buttons>
						</div>
					</div>
				</a>
			</CardActions>
		</Card>
    )
}
export default ProductCard;