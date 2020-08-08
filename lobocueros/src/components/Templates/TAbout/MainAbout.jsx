import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import Breadcrumb from '../../Organisms/OReusable/Breadcrumb';
import InfoBuySection from '../TReusable/InfoBuySection';
import TabsAbout from '../../Organisms/OAbout/TabsAbout';


const MainAbout = () => {
    return(
		<div className="mainAbout-main">
			<div className="breadcrumb">	
				<Breadcrumb breadcrumb={"Sobre Nosotros"}></Breadcrumb>	
			</div> 

			<div className="about-tabs">
				<TabsAbout></TabsAbout>
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
export default MainAbout;