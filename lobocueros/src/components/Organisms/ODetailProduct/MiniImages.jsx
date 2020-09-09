import React from 'react';
import Bolso from '../../../assets/Images/Bolso.fw.png'
import Grid from '@material-ui/core/Grid';

const MiniImages = () => {
    return(
		<div className="mini-images-grid">
			<Grid container spacing={1}>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
				<Grid item xs={2}>
					<img src={Bolso}></img>
				</Grid>
			</Grid>
		</div>
		
    )
}
export default MiniImages;