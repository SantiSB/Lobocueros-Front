import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import InfoBuySection from '../TReusable/InfoBuySection';
import InfoShipping from '../../Organisms/OResume/InfoShipping';
// import PayMethodTable from '../../Organisms/OResume/PayMethodTable';
import DetailOrder from '../../Organisms/OResume/DetailOrder';
import ResumeOrder from '../../Organisms/OResume/ResumeOrder';
// import LoginRegister from '../../Organisms/OResume/LoginRegister';

const MainResume = () => {
    return( 
		<div className="mainResume-main">
			<div className="resume">
				<div className="info-method-detail">
					<div className="info-shipping">
						<InfoShipping></InfoShipping>
					</div>
					{/* <div className="pay-method-table">
						<PayMethodTable></PayMethodTable>
					</div> */}
					<div className="detail-order">
						<DetailOrder></DetailOrder>
					</div> 
				</div>

				<div className="resume-login">
					<div className="resume-order">
						<ResumeOrder></ResumeOrder>
					</div>
					{/* <div className="login-register">
						<LoginRegister></LoginRegister>
					</div> */}
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
export default MainResume;