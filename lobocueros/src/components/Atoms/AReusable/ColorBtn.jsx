import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setPrincipalImageDetail, setColorSelected} from "../../../redux/actionsCreators";

const ColorBtn = (props) => {
	console.log("qwe", props.changeColor)

	const sets = (picture, color) => {
		props.setColorSelected(color)
		props.setPrincipalImageDetail(picture)
		props.changeColor(props.codeColor)
	}
	
    return(
		<button className="color-btn" style={{background: props.codeColor}} onClick={()=>sets(props.picture, props.color)}></button>
    )
}

const mapStateToProps = (state) => ({
	allData: state.allData,
	productsData: state.productsData,
	principalImageDetail: state.principalImageDetail,
	colorSelected: state.colorSelected
});
const mapDispatchToProps = {
	setAllData,
	setProductsData,
	setPrincipalImageDetail,
	setColorSelected,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ColorBtn);