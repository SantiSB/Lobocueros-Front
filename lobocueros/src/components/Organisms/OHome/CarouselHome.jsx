import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData } from "../../../redux/actionsCreators";
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../Organisms/OReusable/ProductCard';
import Carousel from 'nuka-carousel';

const useStyles = makeStyles((theme) => ({
	carousel:{
		padding: "1rem 5rem 3rem 5rem",
		maxWidth: "90%",
	} 
	
  })); 

const CarouselHome = (props) => {
	const classes = useStyles();

	const totalItems = props.productsData
	
    return(
		<>
			<div className="carousel-home">
				<Carousel className={classes.carousel}>
					<div className="item-carousel">
						<ProductCard item={totalItems[0]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[1]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[2]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[3]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[4]} className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard item={totalItems[5]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[6]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[7]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[8]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[9]} className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard item={totalItems[10]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[11]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[12]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[13]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[14]} className="product-carousel"></ProductCard>
					</div>
				</Carousel>
			</div>

			<div className="carousel-home-movil">
				<Carousel className={classes.carousel}>
					<div className="item-carousel">
						<ProductCard item={totalItems[0]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[1]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[2]} className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard item={totalItems[3]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[4]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[5]} className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard item={totalItems[6]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[7]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[8]} className="product-carousel"></ProductCard>
					</div>
				</Carousel>
			</div>

			<div className="carousel-home-movil-small">
				<Carousel className={classes.carousel}>
					<div className="item-carousel">
						<ProductCard item={totalItems[0]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[1]} className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard item={totalItems[2]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[3]} className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard item={totalItems[4]} className="product-carousel"></ProductCard>
						<ProductCard item={totalItems[5]} className="product-carousel"></ProductCard>
					</div>
				</Carousel>
			</div>

			<div className="carousel-home-movil-extra-small">
				<Carousel className={classes.carousel}>
					<div className="item-carousel">
						<ProductCard item={totalItems[0]} className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard item={totalItems[1]} className="product-carousel"></ProductCard>
					</div>
					<div className="item-carousel">
						<ProductCard item={totalItems[2]} className="product-carousel"></ProductCard>
					</div>
				</Carousel>
			</div>
		</>
    )
}

const mapStateToProps = (state) => ({
	allData: state.allData,
	productsData: state.productsData,
});
const mapDispatchToProps = {
	setAllData,
	setProductsData,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CarouselHome);