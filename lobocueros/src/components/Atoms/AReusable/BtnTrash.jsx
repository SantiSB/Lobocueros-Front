import React from 'react';
import Trash from '../../../assets/Icons/Trash.svg'


const BtnTrash = (props) => {
    

    if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) != [] && JSON.parse(localStorage.getItem('carrito')) != undefined){
		var carritoActual = JSON.parse(localStorage.getItem('carrito'))
	}
	else{
		var carritoActual = []
    }  

    const deleteItem = (index) =>{
        carritoActual.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carritoActual))   
        window.location.reload()    
    }


    return <button onClick={()=>deleteItem(props.index)} ><i><img src={Trash}></img></i></button>
}
export default BtnTrash;