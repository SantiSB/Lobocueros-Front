import React from 'react';
import Bolso from '../../../assets/Images/Bolso.fw.png'
import Carousel from 'nuka-carousel';


const CarouselImages = () => {
    return(
		<Carousel className="carousel-images-section">
			<div>
				<img src={Bolso}></img>
			</div>
			<div>
				<img src={Bolso}></img>
			</div>
			<div>
				<img src={Bolso}></img>
			</div>
		</Carousel>
    )
}
export default CarouselImages;