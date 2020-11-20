import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setPrincipalImageDetail } from "../../../redux/actionsCreators";

const PrincipalImage = (props) => {
	const mainPicture = () => {
		function isMain(image){
			return image.mainPicture === true
		}
		if(props.productDetail.images != null){
			return props.productDetail.images.find(isMain).image
		}
	}
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
					: <div style={{fontSize: "13pt", color: "#420000"}}>
						<h3>El producto que buscas no existe</h3>
						<a href="/productos" style={{color: "#420000"}}>Ver Productos</a>
						</div>
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