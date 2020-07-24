import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../Organisms/OReusable/ProductCard';
import Carousel from 'nuka-carousel';

const useStyles = makeStyles((theme) => ({
	carousel:{
		padding: "1rem 5rem 3rem 5rem",
		maxWidth: "90%"
	}
	
  }));

const CarouselHome = () => {
	const classes = useStyles();
    return(
		<>
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

			<div className="carousel-home-movil">
				<Carousel className={classes.carousel}>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
					</div>
				</Carousel>
			</div>

			<div className="carousel-home-movil-small">
				<Carousel className={classes.carousel}>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
						<ProductCard className="product-carousel"></ProductCard>
					</div>
				</Carousel>
			</div>

			<div className="carousel-home-movil-extra-small">
				<Carousel className={classes.carousel}>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard className="product-carousel"></ProductCard>
					</div>
				</Carousel>
			</div>
		</>
    )
}
export default CarouselHome;