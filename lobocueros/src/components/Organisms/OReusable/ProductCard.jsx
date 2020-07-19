import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Bolso from '../../../assets/Images/Bolso.fw.png'

const useStyles = makeStyles({
	root: {
	  maxWidth: 250,
	},
	media: {
	  height: 250,
	},
});


const ProductCard = () => {

	const classes = useStyles();
    return(
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
				className={classes.media}
				image={Bolso}
				title="Titulo"
				/>
				<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Titulo Producto
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					<span className="old-value">$150.000</span><span>$100.000</span>
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					<span> Colores </span>
				</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
				Agregar al Carrito
				</Button>
			</CardActions>
		</Card>
		
    )
}
export default ProductCard;