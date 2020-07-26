import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import CarouselHome from '../../Organisms/OHome/CarouselHome'
import InfoBuySection from '../TReusable/InfoBuySection';
import BannerHome from '../../Organisms/OHome/BannerHome';
import PromoHome from '../../Organisms/OHome/PromoHome';

const MainHome = () => {
    return(
		<div className="mainHome-main">

			<div className="banner-home">
				<BannerHome></BannerHome>				
			</div>

			<CarouselHome></CarouselHome>

			<div className="promo-home">
				<PromoHome></PromoHome>
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