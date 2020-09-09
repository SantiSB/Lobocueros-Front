import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import InfoBuySection from '../TReusable/InfoBuySection'
import BreadcrumbDetailProduct from '../../Organisms/ODetailProduct/BreadcrumbDetailProduct';
import CarouselImages from '../../Organisms/ODetailProduct/CarouselImages';
import InfoProductDetail from '../../Organisms/ODetailProduct/InfoProductDetail';
import GeneralInfoProduct from '../../Organisms/ODetailProduct/GeneralInfoProduct';
import MiniImages from '../../Organisms/ODetailProduct/MiniImages';

const MainDetailProduct = () => {
    return(
		<div className="detail-product-main">
			<div className="breadcrumb">
				<BreadcrumbDetailProduct breadcrumb={"Categoria"}></BreadcrumbDetailProduct>	
			</div>

			<div className="details-product">
				<div className="carousel-images-detail">
					<CarouselImages></CarouselImages>
					<MiniImages></MiniImages>
				</div>
				<div className="info-product">
					<InfoProductDetail></InfoProductDetail>
					<GeneralInfoProduct></GeneralInfoProduct>
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
export default MainDetailProduct;