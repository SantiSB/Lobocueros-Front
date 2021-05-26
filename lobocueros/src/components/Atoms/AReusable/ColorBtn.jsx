import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setPrincipalImageDetail, setColorSelected} from "../../../redux/actionsCreators";

const ColorBtn = (props) => {
	const sets = (picture, color, e) => {
		props.setColorSelected(color)
		props.setPrincipalImageDetail(picture)
		props.changeColor(props.codeColor, props.color)
		
		var testElements = document.getElementsByClassName('color-btn');
		Array.prototype.filter.call(testElements, function(testElement){
			testElement.style.border = "1px solid white";
		});
		e.target.style.border = "3px solid black"

	}

	
    return(
		<button id="color-btn" className="color-btn" style={{background: props.codeColor}} onClick={(e)=>sets(props.picture, props.color, e)}></button>
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