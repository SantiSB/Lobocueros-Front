import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setPrincipalImageDetail } from "../../../redux/actionsCreators";

const PrincipalImage = (props) => {
	const mainPicture = () => {
			function isMain(picture){
				return picture.mainPicture == true
			}
			if(props.productDetail.pictures != null){
				return props.productDetail.pictures.find(isMain).img
			}
	}
	if(props.principalImageDetail == ""){
		if(mainPicture() != undefined){
			props.setPrincipalImageDetail(mainPicture())
		}
	}

    return( 
		
		<div className="principal-image">
			<img src={props.principalImageDetail}></img>
		</div>
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