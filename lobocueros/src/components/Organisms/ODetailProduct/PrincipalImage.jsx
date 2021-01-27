import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setPrincipalImageDetail } from "../../../redux/actionsCreators";
import Lobocueros from '../../../assets/Icons/Grupo 25.svg'

const PrincipalImage = (props) => {
	console.log("qaz", props.productDetail)
	const mainPicture = () => {
		if(props.productDetail.images > 0){
			function isMain(image){
				return image.mainPicture == true
		}
		
		if(props.productDetail.images){
			return props.productDetail.images.find(isMain).image
		}
		else{
			return Lobocueros
		}
		}
		else {return Lobocueros}
	}
	console.log("qaz1", mainPicture())

	if(props.principalImageDetail === ""){
		if(mainPicture() != undefined){
			props.setPrincipalImageDetail(mainPicture())
		} 
	}

    return( 	
		<>
			{
				props.principalImageDetail 
				? 	<div className="principal-image">
						<img alt="main-img" src={props.principalImageDetail}></img>
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