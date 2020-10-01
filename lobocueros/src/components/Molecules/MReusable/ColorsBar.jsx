import { colors } from '@material-ui/core';
import React from 'react';
import ColorBtn from '../../Atoms/AReusable/ColorBtn';

const ColorsBar = (props) => {
	console.log("asdf",props)
    return(
		<div className="colors-bar">
			{
				props.colors.map(function(boton){
					return <ColorBtn color={boton.code}></ColorBtn>
				})
			}
			{/* <ColorBtn color="#ffffff"></ColorBtn> */}
		</div>
		
    )
}
export default ColorsBar;