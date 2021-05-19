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
						<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Lobocueros/@4.5882023,-74.0926449,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f999e629b6dd3:0x6bfa81868f4e7c85!8m2!3d4.5882023!4d-74.0904562"><i><img alt="link-google" src={Google}></img></i></a>
						<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lobocueros/"><i><img alt="link-instagram" src={Instagram}></img></i></a>
						<a target="_blank" rel="noopener noreferrer" href="https://wa.me/573113582648"><i><img alt="link-wa" src={Whatsapp}></img></i></a>
						<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/lobocuerosas"><i><img alt="link-facebook" src={Facebook}></img></i></a>
					</div>
					<div className="email-contact">
						<p>atencionaclientelb@gmail.com</p>
					</div>
				</div>
				<div className="phones-contact">
					<span>Ventas: <br></br>(+57)313 871 1212 <br></br>(+57)317 755 5029</span>
					<span>Administración: <br></br>(+57)321 399 8542</span>
					<span>Gerencia Comercial: <br></br>(+57)313 871 1212</span>
					<span>Atención al cliente: <br></br>(031)7 356 696</span>
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