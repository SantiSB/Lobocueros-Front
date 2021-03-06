import React from 'react';
import Article from '../../Atoms/AReusable/Article';
import InfoItemBuy from '../../Atoms/AReusable/InfoItemBuy';

const OrderListItem = (props) => {
    return(
      <div className="item">
        <div className="image-item-order">
          <Article image={props.item.images[0].image}></Article>
        </div>
        <div className="info-item-order">
          <InfoItemBuy item={props.item}></InfoItemBuy>
        </div> 
      </div>
		
    )
}
export default OrderListItem;