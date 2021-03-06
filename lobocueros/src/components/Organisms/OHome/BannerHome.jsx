import React from 'react';
import Buttons from '../../Atoms/AReusable/Buttons'

const BannerHome = () => {
    return(
			<div className="banner-container">
				<a href="/productos">
					<Buttons type="Gender" text="VER TODO"></Buttons>
				</a>			
			</div>
    )
}
export default BannerHome;