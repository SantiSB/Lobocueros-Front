import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import InfoBuySection from '../TReusable/InfoBuySection';
import PurchaseFalse from '../../Organisms/OFailedPurchase/PurchaseFalse';


const MainFailedPurchase = () => {
    return(
		<div className="mainSuccessfulPurchase-main">
			<div className="SuccessfulPurchase">
				<PurchaseFalse></PurchaseFalse>
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
export default MainFailedPurchase;