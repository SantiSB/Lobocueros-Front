import React from 'react';
import Article from '../../Atoms/AReusable/Article';
import InfoItemBuy from '../../Atoms/AReusable/InfoItemBuy';
import Counter from '../../Atoms/AReusable/Counter'; 
import BtnTrash from '../../Atoms/AReusable/BtnTrash';

const ItemResume = () => {
    return (
        <div className="item-cart">            
            <div className="image-item-buy">
                <Article></Article>
            </div>
            <div className="info-item-buy">
                <InfoItemBuy></InfoItemBuy>
            </div>
            <div className="buttons-item-buy">
                <div className="trash-btn-container">
                    <BtnTrash></BtnTrash>
                </div>
                <div className="counter-btn-container">
                    <Counter></Counter>
                </div>
            </div>
        </div>
    )
}
export default ItemResume;