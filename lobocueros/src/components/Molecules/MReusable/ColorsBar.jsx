import React from 'react';
import ColorBtn from '../../Atoms/AReusable/ColorBtn';

const ColorsBar = () => {
    return(
		<div className="colors-bar">
			<ColorBtn color={"#282828"}></ColorBtn>
			<ColorBtn color={"#653833"}></ColorBtn>
			<ColorBtn color={"#14951A"}></ColorBtn>
			<ColorBtn color={"#E5984E"}></ColorBtn>
			<ColorBtn color={"#3475B4"}></ColorBtn>		
		</div>
		
    )
}
export default ColorsBar;