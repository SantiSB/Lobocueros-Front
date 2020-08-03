import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import InfoBuySection from '../TReusable/InfoBuySection';
import PurchaseFalse from '../../Organisms/OFailedPurchase/PurchaseFalse';


const MainFailedPurchase = () => {
    return(
		<div className="mainFailedPurchase-main">
			<div className="FailedPurchase">
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