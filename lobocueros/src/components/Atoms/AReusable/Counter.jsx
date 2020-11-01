import React, {useState, useEffect} from 'react';
import Mas from '../../../assets/Icons/Mas.svg'
import Menos from '../../../assets/Icons/Menos.svg'
import { connect } from "react-redux";
import { setCounter } from "../../../redux/actionsCreators";

const Counter = (props) => {
    return (
        <>
            <button onClick={props.countLess}><i><img src={Menos}></img></i></button>
                <span>{props.count}</span>
            <button onClick={props.countMore}><i><img src={Mas}></img></i></button>
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