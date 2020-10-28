import React, {useState} from 'react';
import Article from '../../Atoms/AReusable/Article';
import InfoItemBuy from '../../Atoms/AReusable/InfoItemBuy';
import Counter from '../../Atoms/AReusable/Counter'; 
import BtnTrash from '../../Atoms/AReusable/BtnTrash';

const ItemCart = (props) => { 
    
    const [counter, setCounter] = useState(1);
	
	const countMore = (event) =>{
		setCounter(counter+1)
	}

	const countLess = (event) =>{
		if(counter > 1){
			setCounter(counter-1)
		}

    }

    if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) != [] && JSON.parse(localStorage.getItem('carrito')) != undefined){
		var carritoActual = JSON.parse(localStorage.getItem('carrito'))
	}
	else{
		var carritoActual = []
    }
    
    const deleteItem = (item, index) => {
        carritoActual.splice(index, 1)
        localStorage.setItem('carrito', JSON.stringify(carritoActual));
    }
    
    
    
    return (
        <div className="item-cart">            
            <div className="image-item-buy">
                <Article image={props.item.pictures[0]}></Article> 
            </div>
            <div className="info-item-buy">
                <InfoItemBuy item={props.item}></InfoItemBuy> 
            </div>
            <div className="buttons-item-buy">
                <div className="trash-btn-container">
                    <BtnTrash deleteItem={deleteItem} item={props.item} index={props.index}></BtnTrash>
                </div>
                <div className="counter-btn-container">
                    <Counter countMore={countMore} countLess={countLess} count={counter}></Counter>
                </div>
            </div>
        </div>
    )
}
export default ItemCart;