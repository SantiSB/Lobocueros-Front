import React from 'react';
import Buttons from '../../Atoms/AReusable/Buttons';


const PromoHome = () => {
    return(
			<div>
				<p>La mejor calidad en</p>
				<h2>Productos en Cuero</h2>
				<a href="/productos" style={{textDecoration: "none"}}><Buttons type="Buy" text="Comprar"></Buttons></a>
			</div>
    )
}
export default PromoHome;