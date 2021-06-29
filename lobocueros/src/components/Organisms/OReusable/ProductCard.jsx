import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ColorsBar from '../../Molecules/MReusable/ColorsBar';
import Buttons from '../../Atoms/AReusable/Buttons';
import Lobocueros from '../../../assets/Icons/Grupo 25.svg' 
 
const ProductCard = (props) => { 
	
	const buildMainPicture = (images) => {
		if(images.length > 0){

		
		function isMain(image){
			return image.mainPicture === true
		}
		if(images){
			return images.find(isMain) ? images.find(isMain).image : null
		}
		else{
			return Lobocueros
		}
		}
		else {return Lobocueros}
	} 
	const itemProduct = props.item  ? props.item : {} 

	const formatter = new Intl.NumberFormat('es-CO', {
		style: 'currency',
		currency: 'COP',
		minimumFractionDigits: 0
	}) 

    return( 
		<>
			{
					itemProduct.id ? <Card className="product-card" >
					<CardActionArea className="card-action-area" >
						<CardContent className="card-content" >
						{
							itemProduct.id ? <a href={itemProduct.id ? `/detalle-producto/${itemProduct.id}` : ""}> 
												<div className="image-product-card" >
													<img src={buildMainPicture(itemProduct.images)} alt="main-img"></img>
												</div>
												<div className="title-product-card">
													<h2>{itemProduct.title}</h2>
												</div>
												<div className="price-product-card">
													<span className="old-value">{itemProduct.price ?formatter.format(itemProduct.price + itemProduct.price * 0.25) : ""}</span><span>{formatter.format(itemProduct.price)}</span>
												</div>
											</a>
										: ""
						}
							
						</CardContent>
					</CardActionArea>
					<CardActions className="card-actions">
						{
							itemProduct.id ? <a href={`/detalle-producto/${itemProduct.id}`}>
											<div className="product-card-actions">
												<div className="colors-product-card">
													<ColorsBar productDetail={itemProduct}></ColorsBar>
												</div>
												<div className="buy-produt-card">
													<Buttons type="Add" text="Agregar al Carrito"></Buttons>
												</div>
											</div>
										</a>
										: ""
						}
					</CardActions>
				</Card>
								: ""
				}
		</>
		
    )
}
export default ProductCard;