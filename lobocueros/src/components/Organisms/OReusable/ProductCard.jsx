import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Bolso from '../../../assets/Images/Bolso.fw.png'
import ColorsBar from '../../Molecules/MReusable/ColorsBar';


const useStyles = makeStyles({
	media: {
	  height: 250,
	},
});




const ProductCard = () => {

	const classes = useStyles();
    return(
		<Card className="product-card">
			<CardActionArea>
				<CardMedia
				className={classes.media}
				image={Bolso}
				title="Titulo"
				/>
				<CardContent>
				<div className="title-product-card">
					<h2>Titulo del Producto</h2>
				</div>
				<div className="price-product-card">
					<span className="old-value">$150.000</span><span>$100.000</span>
				</div>
				
				</CardContent>
			</CardActionArea>
			<CardActions>
				<div className="product-card-actions">
					<div className="colors-product-card">
						<ColorsBar></ColorsBar>
					</div>
					<div className="buy-produt-card">
						<Button variant="contained" className="btn-buy">
							Agregar al carrito
						</Button>
					</div>
				</div>
				
			</CardActions>
		</Card>
		
    )
}
export default ProductCard;