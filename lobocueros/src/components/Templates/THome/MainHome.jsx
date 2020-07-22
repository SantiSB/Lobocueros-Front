import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ProductCard from '../../Organisms/OReusable/ProductCard';
import Carousel from 'nuka-carousel';
import InfoBuySection from '../TReusable/InfoBuySection';


const useStyles = makeStyles((theme) => ({
	btnBanner: {
		color: "#ffffff",
		border: "1px solid #ffffff",
		background: "#000000",
		opacity: ".7",
		borderRadius: "100px"
	},
	btnPromo: {
		border: "1px solid #000000",
		borderRadius: "100px"
	},
	carousel:{
		padding: "1rem 5rem 3rem 5rem",
		maxWidth: "90%"
	}
	
  }));

const MainHome = () => {
	const classes = useStyles();
    return(
		<div className="mainHome-main">
			<div className="banner-home">
				<Button className={classes.btnBanner} variant="outlined">Mujer</Button>
				<Button className={classes.btnBanner} variant="outlined">Hombre</Button>				
			</div>
			<div className="carousel-home">
				<Carousel className={classes.carousel}>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
					</div>
				</Carousel>

			</div>
			<div className="promo-home">
				<div>
					<p>Distribuidor oficial de</p>
					<h2>Tapabocas Termosellado</h2>
					<Button className={classes.btnPromo} variant="outlined">Comprar</Button>
				</div>
				
			</div>
			<div className="instagram">
				<InstagramSection></InstagramSection>
			</div>
			<div className="info-buy">
				<InfoBuySection></InfoBuySection>
			</div>
		</div>
    )
}
export default MainHome;