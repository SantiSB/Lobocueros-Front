// import React from 'react';
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import { connect} from "react-redux";
import { setAllData, setProductsData } from "../../../redux/actionsCreators";
import ProductCard from '../../Organisms/OReusable/ProductCard';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import ReactDOM from 'react-dom';
// import InfiniteCarousel from 'react-leaf-carousel';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CarouselHome extends React.Component {
  
  render() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: window.screen.width < 540 ? 1 : window.screen.width > 540 && window.screen.width < 1024 ? 3 : 5,
		// slidesToScroll: 0,
		centerMode: true,
		centerPadding: "10px",
		dots: window.screen.width < 1024 ? false : true
	  };
	return (
		<div className="carousel-home">
			<Slider {...settings} >
				{
					this.props.productsData.map(function(x){
						return <ProductCard item={x} className="product-carousel"></ProductCard>
					})
				}
			</Slider>
		</div>
	);
		}
}


const mapStateToProps = (state) => ({ 
	allData: state.allData,
	productsDataHome: state.productsDataHome,
	productsData: state.productsData,
});
const mapDispatchToProps = {
	setAllData,
	setProductsData,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CarouselHome);