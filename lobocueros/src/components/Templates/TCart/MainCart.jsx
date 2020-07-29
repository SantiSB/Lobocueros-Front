import React from 'react';
import InstagramSection from '../TReusable/InstagramSection'
import InfoBuySection from '../TReusable/InfoBuySection';
import CounterItems from '../../Organisms/OCart/CounterItems'
import ListItems from '../../Organisms/OCart/ListItems'
import Pay from '../../Organisms/OCart/Pay'
import ResumeBuy from '../../Organisms/OCart/ResumeBuy';

const MainCart = () => {
    return(
		<div className="mainCart-main">
			<div className="cart">
				<div className="info-items-buy">
					<div className="counter-items">
						<CounterItems></CounterItems>
					</div>
					<div className="list-items">
						<ListItems></ListItems>
					</div>
					<div className="pay">
						<Pay></Pay>
					</div>
				</div>
				<div className="resume-buy">
					<ResumeBuy></ResumeBuy>
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
export default MainCart;