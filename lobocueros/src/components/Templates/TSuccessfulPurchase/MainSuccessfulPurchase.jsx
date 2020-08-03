import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import InfoBuySection from '../TReusable/InfoBuySection';
import PurchaseTrue from '../../Organisms/OSucessfulPurchase/PurchaseTrue';


const MainSuccessfulPurchase = () => {
    return(
		<div className="mainSuccessfulPurchase-main">
			<div className="SuccessfulPurchase">
				<PurchaseTrue></PurchaseTrue>
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
export default MainSuccessfulPurchase;