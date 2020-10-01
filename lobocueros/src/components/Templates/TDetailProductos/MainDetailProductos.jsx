import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData } from "../../../redux/actionsCreators";
import InstagramSection from '../TReusable/InstagramSection'
import InfoBuySection from '../TReusable/InfoBuySection'
import BreadcrumbDetailProduct from '../../Organisms/ODetailProduct/BreadcrumbDetailProduct';
import CarouselImages from '../../Organisms/ODetailProduct/CarouselImages';
import InfoProductDetail from '../../Organisms/ODetailProduct/InfoProductDetail';
import GeneralInfoProduct from '../../Organisms/ODetailProduct/GeneralInfoProduct';
import MiniImages from '../../Organisms/ODetailProduct/MiniImages';

const MainDetailProduct = (props) => { 
	const idRoute = window.location.pathname.substr(11)

	function isId(product){
		return product.id == idRoute
	}

	var productDetail = {}
	if(props.productsData.find(isId) != undefined && props.productsData.find(isId) != null){
		productDetail = props.productsData.find(isId)
	}


    return(
		<div className="detail-product-main">
			<div className="breadcrumb">
				<BreadcrumbDetailProduct breadcrumb={productDetail.category}></BreadcrumbDetailProduct>	
			</div>

			<div className="details-product">
				<div className="carousel-images-detail">
					<CarouselImages></CarouselImages>
					<MiniImages></MiniImages>
				</div>
				<div className="info-product">
					<InfoProductDetail productDetail={productDetail}></InfoProductDetail>
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

const mapStateToProps = (state) => ({
	allData: state.allData,
	productsData: state.productsData,
});
const mapDispatchToProps = {
	setAllData,
	setProductsData,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(MainDetailProduct);