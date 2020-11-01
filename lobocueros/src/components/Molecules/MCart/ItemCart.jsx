import React, {useState} from 'react';
import Article from '../../Atoms/AReusable/Article';
import InfoItemBuy from '../../Atoms/AReusable/InfoItemBuy';
import Counter from '../../Atoms/AReusable/Counter'; 
import BtnTrash from '../../Atoms/AReusable/BtnTrash';

const ItemCart = (props) => { 
    
    if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) != [] && JSON.parse(localStorage.getItem('carrito')) != undefined){
		var carritoActual = JSON.parse(localStorage.getItem('carrito'))
	}
	else{
		var carritoActual = [] 
    } 

    const [counter, setCounter] = useState(props.item.udsItem);
    
    var item = props.item
    console.log("ñItem", item.totalPrice)
	const countMore = (event) =>{
        setCounter(counter+1)
        item.udsItem = counter+1
        item.totalPrice = item.totalPrice + item.price
        carritoActual.splice(props.index, 1, item);
        localStorage.setItem('carrito', JSON.stringify(carritoActual))   
        window.location.reload()    
	}

	const countLess = (event) =>{
		if(counter > 1){
            setCounter(counter-1)
            item.udsItem = counter-1
            item.totalPrice = item.totalPrice >= item.price ? item.totalPrice - item.price : item.totalPrice
            carritoActual.splice(props.index, 1, item);
            localStorage.setItem('carrito', JSON.stringify(carritoActual))   
            window.location.reload()  
        }
  
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
                    <BtnTrash item={props.item} index={props.index} ></BtnTrash>
                </div>
                <div className="counter-btn-container">
                    <Counter countMore={countMore} countLess={countLess} count={counter}></Counter>
                </div>
            </div>
        </div>
    )
}
export default ItemCart;