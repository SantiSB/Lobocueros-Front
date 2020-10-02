import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData } from "../../../redux/actionsCreators";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../../Organisms/OReusable/ProductCard'

const useStyles = makeStyles((theme) => ({
	root: {
	  display: "flex",
	  justifyContent: "center",
	  margin: "1rem 0rem"
	}, 
  }));
 
const ProductsGrid = (props) => {
	const classes = useStyles();
	const totalItems = props.productsData

	const itemsGridProducts = totalItems.map(function(item, index){    
		return <Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard item={item}></ProductCard>
				</Grid>
	})

    return(
			<Grid container spacing={0} className={classes.root}>
				{itemsGridProducts}
			</Grid>
			
    )
}

const mapStateToProps = (state) => ({
	allData: state.allData,
	productsData: state.productsData,
});
const mapDispatchToProps = {
	setAllData,
	setProductsData,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid);