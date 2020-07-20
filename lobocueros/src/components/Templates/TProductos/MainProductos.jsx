import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import Breadcrumb from '../../Organisms/OReusable/Breadcrumb';
import Filter from '../../Organisms/OProductos/Filter';
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


const MainProductos = () => {
	const classes = useStyles();
    return(
		<div className="mainProductos-main">
			<div className="breadcrumb">	
				<Breadcrumb breadcrumb={"Productos"}></Breadcrumb>	
			</div>

			<div className="products-filter">
				<Filter></Filter>
			</div>

			<div className="products-grid">
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
			</div>
			
			<div className="instagram">
				<InstagramSection></InstagramSection>
			</div>
			<div className="info-buy">
				
			</div>
		</div>
    )
}
export default MainProductos;