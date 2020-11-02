import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect} from "react-redux";
import { setAllData, setProductsData, setPrincipalImageDetail } from "../../../redux/actionsCreators";

const MiniImages = (props) => {
	var arrayImg = []
	const productItemGrid = (pictures) => {
		if(pictures != null){
			pictures.map(function(picture){
				arrayImg.push(picture.img)
			})
		}
		
		return	arrayImg.map(function(picture){
					return  <Grid item xs={4} md={2} lg={2}>
								<img alt="pricipal-img" src={picture} onClick={()=>props.setPrincipalImageDetail(picture)}></img>
							</Grid>
				})  
	}
	return(
		<div className="mini-images-grid">
			<Grid container spacing={1}>
				{productItemGrid(props.productDetail.pictures)}
			</Grid>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(MiniImages);