import React from 'react';
import Trash from '../../../assets/Icons/Trash.svg'


const BtnTrash = (props) => {
    
    var carritoActual = []
    if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) !== [] && JSON.parse(localStorage.getItem('carrito')) !== undefined){
		carritoActual = JSON.parse(localStorage.getItem('carrito'))
	}
	else{
		carritoActual = []
    }  

    const deleteItem = (index) =>{
        carritoActual.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carritoActual))   
        window.location.reload()    
    }


    return <button onClick={()=>deleteItem(props.index)} ><i><img alt="trash" src={Trash}></img></i></button>
}
export default BtnTrash;