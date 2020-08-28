import React from 'react';
import Buttons from '../../Atoms/AReusable/Buttons';


const PromoHome = () => {
    return(
			<div>
				<p>Distribuidor oficial de</p>
				<h2>Tapabocas Termosellado</h2>
				<a href="/productos" style={{textDecoration: "none"}}><Buttons type="Buy" text="Comprar"></Buttons></a>
			</div>
    )
}
export default PromoHome;