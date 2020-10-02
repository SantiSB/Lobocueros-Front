import { colors } from '@material-ui/core';
import React from 'react';
import ColorBtn from '../../Atoms/AReusable/ColorBtn';

const ColorsBar = (props) => {
	console.log("asdf",props)
	const colors = props.colors != null ? props.colors : []
    return(
		<div className="colors-bar">
			{
				colors.map(function(boton){
					return <ColorBtn color={boton.code}></ColorBtn>
				})
			}
			{/* <ColorBtn color="#ffffff"></ColorBtn> */}
		</div>
		
    )
}
export default ColorsBar;