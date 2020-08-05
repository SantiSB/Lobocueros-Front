import React from 'react';

const ColorBtn = (props) => {
    return(
		<button className="color-btn" style={{background: props.color}}></button>
    )
}
export default ColorBtn;