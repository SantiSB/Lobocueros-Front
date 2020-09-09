import React from 'react';
import Bolso from '../../../assets/Images/Bolso.fw.png'
import Article from '../../Atoms/AReusable/Article';
import InfoItemBuy from '../../Atoms/AReusable/InfoItemBuy';

const OrderListItem = () => {
    return(
      <div className="item">
        <div className="image-item-order">
          <Article></Article>
        </div>
        <div className="info-item-order">
          <InfoItemBuy></InfoItemBuy>
        </div>
      </div>
		
    )
}
export default OrderListItem;