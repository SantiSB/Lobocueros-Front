import React from 'react';
import Mas from '../../../assets/Icons/Mas.svg'
import Menos from '../../../assets/Icons/Menos.svg'

const Counter = () => {
    return (
        <>
            <button><i><img src={Menos}></img></i></button>
            <span>1</span>
            <button><i><img src={Mas}></img></i></button>
        </>
    )
}
export default Counter;