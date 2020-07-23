import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import InfoBuySection from '../TReusable/InfoBuySection'
import Breadcrumb from '../../Organisms/OReusable/Breadcrumb';
import CarouselImages from '../../Organisms/ODetailProduct/CarouselImages';
import InfoProductDetail from '../../Organisms/ODetailProduct/InfoProductDetail';
import GeneralInfoProduct from '../../Organisms/ODetailProduct/GeneralInfoProduct';

const MainDetailProduct = () => {
    return(
		<div className="detail-product-main">
			<div className="breadcrumb">
				<Breadcrumb readcrumb={"productos"}></Breadcrumb>	
			</div>

			<div className="details-product">
				<div className="carousel-images-detail">
					<CarouselImages></CarouselImages>
				</div>
				<div className="info-product">
					<InfoProductDetail></InfoProductDetail>
				</div>
			</div>

			<div className="general-info">
				<GeneralInfoProduct></GeneralInfoProduct>
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
export default MainDetailProduct;