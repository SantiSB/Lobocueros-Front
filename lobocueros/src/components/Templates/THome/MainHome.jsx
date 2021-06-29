import React from "react";
import { connect} from "react-redux";
import { setAllData, setProductsData, setProductsDataHome } from "../../../redux/actionsCreators";
import InstagramSection from '../TReusable/InstagramSection'
import CarouselHome from '../../Organisms/OHome/CarouselHome2'
import InfoBuySection from '../TReusable/InfoBuySection';
import BannerHome from '../../Organisms/OHome/BannerHome';
import PromoHome from '../../Organisms/OHome/PromoHome';


const MainHome = (props) => {

	
	
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
const mapStateToProps = (state) => ({
	allData: state.allData,
	productsData: state.productsData,
	pageActual: state.pageActual
  });
  const mapDispatchToProps = {
	setAllData,
	setProductsData,
	setProductsDataHome,
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(MainHome);
