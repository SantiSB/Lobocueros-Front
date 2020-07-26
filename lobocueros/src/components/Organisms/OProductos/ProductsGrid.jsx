import React from 'react';
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


const ProductsGrid = () => {
	const classes = useStyles();
    return(
			<Grid container spacing={0} className={classes.root}>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
				<Grid item xs={12} sm={6} md={3} className={classes.root} >
					<ProductCard></ProductCard>
				</Grid>
			</Grid>
			
    )
}
export default ProductsGrid;