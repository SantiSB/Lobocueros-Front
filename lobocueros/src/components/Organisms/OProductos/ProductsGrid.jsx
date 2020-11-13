import React, {useEffect} from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setListFilter, setPageActual } from "../../../redux/actionsCreators";
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
	console.log("juanita", props.allData.next)
	const classes = useStyles();
	const totalItemsFilter = props.listFilter

	const [page, setPage] = React.useState(0);
	const handleChange = (event, value) => {
		setPage(value);
		props.setPageActual(value)
	};

	console.log("page", page, props.pageActual)

	const itemsGridProducts = totalItemsFilter.map(function(item, index){    
		return <Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard item={item}></ProductCard>
				</Grid>
	})

    return(
			<>
			<Grid container spacing={0} className={classes.root}>
				{itemsGridProducts}
			</Grid>
			<div className={classes.root}>
				<Pagination count={15} page={page} onChange={handleChange}/>
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
	setListFilter,
	setPageActual
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid);