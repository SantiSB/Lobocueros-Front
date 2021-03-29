import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setPageActual } from "../../../redux/actionsCreators";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../../Organisms/OReusable/ProductCard'
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
	root: {
	  display: "flex",
	  justifyContent: "center",
	  margin: "1rem 0rem"
	}, 
	rootPag: {
		'& > *': {
		  marginTop: theme.spacing(2),
		},
	  },
  }));
 
const ProductsGrid = (props) => {
	console.log("qwe", props.pageActual)
	const classes = useStyles();
	const totalItemsFilter = props.listFilter

	const [page, setPage] = React.useState(props.pageActual);
	const handleChange = (event, value) => {
		setPage(value);
		props.setPageActual(value)
	};

	const count = () =>{
		var pages = Math.ceil(totalItemsFilter.length / 19 )
		return pages
	}

	const itemsGridProducts = totalItemsFilter.map(function(item, index){    
		return <Grid item xs={12} sm={6} md={3} className={classes.root} key={index}>
					<ProductCard item={item}></ProductCard>
				</Grid>
	})
 
    return(
			<>
			<Grid container spacing={0} className={classes.root}>
				{itemsGridProducts}
			</Grid>
			<div className={classes.root}>
				<Pagination count={count()} page={page} onChange={handleChange}/>
		  	</div>
			  
			</>
    )
}

const mapStateToProps = (state) => ({
	allData: state.allData,
	productsData: state.productsData,
	listFilter: state.listFilter,
	pageActual: state.pageActual
});
const mapDispatchToProps = {
	setAllData,
	setProductsData,
	setPageActual
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid);