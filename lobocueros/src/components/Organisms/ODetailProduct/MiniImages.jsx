import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect} from "react-redux";
import { setAllData, setProductsData, setPrincipalImageDetail } from "../../../redux/actionsCreators";

const MiniImages = (props) => {
	var arrayImg = []
	const productItemGrid = (images) => {
		if(images != null){
			images.map(function(image){
				arrayImg.push(image.image)
			})
		}
		
		return	arrayImg.map(function(image, index){
					return  <Grid item xs={4} md={2} lg={2} key={index}>
								<img alt="pricipal-img" src={image} onClick={()=>props.setPrincipalImageDetail(image)}></img>
							</Grid>
				})  
	}
	return(
		<div className="mini-images-grid">
			<Grid container spacing={1}>
				{productItemGrid(props.productDetail.images)}
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