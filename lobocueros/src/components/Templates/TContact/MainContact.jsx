import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import Breadcrumb from '../../Organisms/OReusable/Breadcrumb';
import InfoBuySection from '../TReusable/InfoBuySection';
import InfoContact from '../../Organisms/OContact/InfoContact';
import Instagram from '../../../assets/Icons/Instagram_Lobocueros.svg'
import Facebook from '../../../assets/Icons/Facebook_Lobocueros.svg'
import Whatsapp from '../../../assets/Icons/Whatsapp_Lobocueros.svg'
import Google from '../../../assets/Icons/Google_Lobocueros.svg'
import MapContact from '../../Molecules/MContact/MapContact';


const MainContact = () => {
    return(
		<div className="mainContact-main">
			<div className="breadcrumb">	
				<Breadcrumb breadcrumb={"Contacto"}></Breadcrumb>	
			</div> 

			<div className="contact-main-container">
				<div className="form-map-contact">
					<div className="form-contact">
						<InfoContact></InfoContact>
					</div>
					<div className="map-contact">
						<MapContact></MapContact>
					</div>
				</div>
				<div className="network-contact">
					<div className="icons-social-media-contact">
						<i><img src={Google}></img></i>
						<i><img src={Instagram}></img></i>
						<i><img src={Whatsapp}></img></i>
						<i><img src={Facebook}></img></i>
					</div>
					<div className="email-contact">
						<p>lobocueros@gmail.com</p>
					</div>
				</div>
				<div className="phones-contact">
					<span>Administración: 321 399 8542</span>
					<span>Tiendas: (031) 341 7657</span>
					<span>Gerencia: 313 871 1212</span>
					<span>Atención al cliente: (031) 735 6696</span>
				</div>
				
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
export default MainContact;