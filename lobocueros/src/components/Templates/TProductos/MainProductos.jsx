import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import Breadcrumb from '../../Organisms/OProductos/Breadcrumb';

const MainProductos = () => {
    return(
		<div className="mainProductos-main">
			<div className="breadcrumb">	
				<Breadcrumb breadcrumb={"Productos"}></Breadcrumb>	
			</div>

			<div className="products-filter">				
			</div>

			<div className="products-grid">				
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