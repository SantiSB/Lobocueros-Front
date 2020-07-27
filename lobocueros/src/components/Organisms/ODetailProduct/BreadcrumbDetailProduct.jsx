import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

const BreadcrumbDetailProduct = (props) => {
    return(
		<Breadcrumbs aria-label="breadcrumb">
			<Link color="inherit" href="/" onClick={handleClick}>
				Home
			</Link>
			<Link color="inherit" href="/" onClick={handleClick}>
				Productos
			</Link>
			<Typography color="textPrimary">{props.breadcrumb}</Typography>
		</Breadcrumbs>
    )
}
export default BreadcrumbDetailProduct;