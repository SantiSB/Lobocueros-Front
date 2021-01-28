import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setPrincipalImageDetail } from "../../../redux/actionsCreators";
import Lobocueros from '../../../assets/Icons/Grupo 25.svg' 

const PrincipalImage = (props) => {
	// const mainPicture = () => {
	// 	function isMain(image){
	// 		return image.mainPicture === true
	// 	}
	// 	if(props.productDetail.images != null){
	// 		return props.productDetail.images.find(isMain).image
	// 	}
	// }
	// if(props.principalImageDetail === ""){
	// 	if(mainPicture() != undefined){
	// 		props.setPrincipalImageDetail(mainPicture())
	// 	} 
	// }

	const buildMainPicture = (images) => {
		if(images.length > 0){

		
		function isMain(image){
			return image.mainPicture == true
		}
		if(images){
			return images.find(isMain).image
		}
		else{
			return Lobocueros
		}
		}
		else {return Lobocueros}
	}

	console.log("zxc", props.principalImageDetail)
    return( 	
		<>
			{
				props.productDetail.images
				? 	<div className="principal-image">
						<img alt="main-img" src={buildMainPicture(props.productDetail.images)}></img>
					</div>
				:	""
			}
			 
		</>

    )
}

const mapStateToProps = (state) => ({
	allData: state.allData,
	productsData: state.productsData,
	principalImageDetail: state.principalImageDetail
});
const mapDispatchToProps = {
	setAllData,
	setProductsData,
	setPrincipalImageDetail,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(PrincipalImage);