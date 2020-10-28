import React from 'react';
import Trash from '../../../assets/Icons/Trash.svg'


const BtnTrash = (props) => {
    return <button onClick={()=>props.deleteItem(props.item, props.index)}><i><img src={Trash}></img></i></button>
}
export default BtnTrash;