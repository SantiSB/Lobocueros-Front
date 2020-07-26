import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	btnBanner: {
		color: "#ffffff",
		border: "1px solid #ffffff",
		background: "#000000",
		opacity: ".7",
		borderRadius: "100px",
	},
  }));

const BannerHome = () => {
	const classes = useStyles();
    return(
			<>
				<Button className={classes.btnBanner} variant="outlined">Mujer</Button>
				<Button className={classes.btnBanner} variant="outlined">Hombre</Button>				
			</>
    )
}
export default BannerHome;