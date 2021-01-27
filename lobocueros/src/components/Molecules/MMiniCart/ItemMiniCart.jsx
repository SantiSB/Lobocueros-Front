import React, {useState} from 'react';
import Counter from '../../Atoms/AReusable/Counter'; 
import BtnTrash from '../../Atoms/AReusable/BtnTrash';

const ItemMiniCart = (props) => { 

    
    if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) !== [] && JSON.parse(localStorage.getItem('carrito')) !== undefined){
		var carritoActual = JSON.parse(localStorage.getItem('carrito'))
	}
	else{
		var carritoActual = [] 
    } 

    const [counter, setCounter] = useState(props.item.udsItem);
    
    var item = props.item
    
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

    const formatter = new Intl.NumberFormat('es-CO', {
		style: 'currency',
		currency: 'COP',
		minimumFractionDigits: 0
	})


    return (
        <div className="item-mini-cart">
            <div className="image-item-buy">
                <img src={item.images[0].image} alt="img"></img>
            </div>
            <div className="info-item-buy">
                <div>
                    <p>{item.title}</p>
                    <p>Precio: <span>{formatter.format(item.price)}</span></p>
                    <p>Color: <span>{item.colorSelected}</span></p>
                    <p>Tiempo de entrega 3 a 5 Días</p>
                </div>
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
export default ItemMiniCart;