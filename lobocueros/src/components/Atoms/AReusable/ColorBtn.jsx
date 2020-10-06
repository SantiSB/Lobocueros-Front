import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setPrincipalImageDetail } from "../../../redux/actionsCreators";

const ColorBtn = (props) => {
  
    return(
		  <button className="color-btn" style={{background: props.color}} onClick={()=>props.setPrincipalImageDetail(props.picture)}></button>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(ColorBtn);