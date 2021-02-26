import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setProductsDataHome } from "../../../redux/actionsCreators";
import InstagramSection from '../TReusable/InstagramSection'
import InfoBuySection from '../TReusable/InfoBuySection'
import BreadcrumbDetailProduct from '../../Organisms/ODetailProduct/BreadcrumbDetailProduct';
import PrincipalImage from '../../Organisms/ODetailProduct/PrincipalImage';
import InfoProductDetail from '../../Organisms/ODetailProduct/InfoProductDetail';
import GeneralInfoProduct from '../../Organisms/ODetailProduct/GeneralInfoProduct';
import MiniImages from '../../Organisms/ODetailProduct/MiniImages';
 
const MainDetailProduct = (props) => { 
	const idRoute = window.location.pathname.substr(11)

	function isId(product){
		return product.id === idRoute
	} 

	var productDetail = {}
	if(props.productsDataHome.find(isId) !== undefined && props.productsDataHome.find(isId) !== null){
		productDetail = props.productsDataHome.find(isId)
	}
    return(
		<div className="detail-product-main">
			<div className="breadcrumb">
				<BreadcrumbDetailProduct breadcrumb={productDetail.categoryType != null ? productDetail.categoryType.category.name : ""}></BreadcrumbDetailProduct>	
			</div>
 
			<div className="details-product"> 
				<div className="carousel-images-detail">
					<PrincipalImage productDetail={productDetail}></PrincipalImage> 
					<MiniImages productDetail={productDetail}></MiniImages>
				</div>
				<div className="info-product">
					<InfoProductDetail productDetail={productDetail}></InfoProductDetail>
					<GeneralInfoProduct productDetail={productDetail}></GeneralInfoProduct>
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
	productsDataHome: state.productsDataHome,
});
const mapDispatchToProps = {
	setAllData,
	setProductsData,
	setProductsDataHome
};
  
export default connect(mapStateToProps, mapDispatchToProps)(MainDetailProduct);