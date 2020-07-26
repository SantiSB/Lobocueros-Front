import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import Breadcrumb from '../../Organisms/OReusable/Breadcrumb';
import Filter from '../../Organisms/OProductos/Filter';
import InfoBuySection from '../TReusable/InfoBuySection';
import ProductsGrid from '../../Organisms/OProductos/ProductsGrid';


const MainProductos = () => {
    return(
		<div className="mainProductos-main">
			<div className="breadcrumb">	
				<Breadcrumb breadcrumb={"Productos"}></Breadcrumb>	
			</div> 

			<div className="products-filter">
				<Filter></Filter>
			</div>

			<div className="products-grid">
				<ProductsGrid></ProductsGrid>
			</div>
			
			<div className="instagram">
				<InstagramSection></InstagramSection>
			</div>
			<div className="info-buy">
				<InfoBuySection></InfoBuySection>
			</div>
		</div>
    )
}
export default MainProductos;