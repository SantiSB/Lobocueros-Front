import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	btnPromo: {
		border: "1px solid #000000",
		borderRadius: "100px"
	},
	
  }));

const PromoHome = () => {
	const classes = useStyles();
    return(
			<div>
				<p>Distribuidor oficial de</p>
				<h2>Tapabocas Termosellado</h2>
				<Button className={classes.btnPromo} variant="outlined">Comprar</Button>
			</div>
    )
}
export default PromoHome;