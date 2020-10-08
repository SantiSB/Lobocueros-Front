import React, {useState, useEffect} from 'react';
import Mas from '../../../assets/Icons/Mas.svg'
import Menos from '../../../assets/Icons/Menos.svg'
import { connect } from "react-redux";
import { setCounter } from "../../../redux/actionsCreators";

const Counter = (props) => {
    var [counter, setCounter] = useState(1);
    useEffect(() => {
        props.setCounter(counter)
      });
    return (
        <>
            <button onClick={counter > 1 ? ()=>setCounter(counter-1) : ()=>setCounter(counter)}><i><img src={Menos}></img></i></button>
                <span>{counter}</span>
            <button onClick={()=>setCounter(counter+1)}><i><img src={Mas}></img></i></button>
        </>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = {
    setCounter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)