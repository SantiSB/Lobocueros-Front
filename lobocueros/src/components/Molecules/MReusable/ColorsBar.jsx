import React from 'react';
import ColorBtn from '../../Atoms/AReusable/ColorBtn';

const ColorsBar = (props) => {
	
	const productDetail = props.productDetail != null ? props.productDetail : {}
	const picturesColor = productDetail.images != null ? productDetail.images : []
	
	var arrayPictures = []
	picturesColor.map(function(e){
		return arrayPictures.push(e)
	})
	const changeColor = props.changeColor
	
	function removeDuplicates() {
		var newArray = [];
		var lookupObject  = {};
   
		for(var i in arrayPictures) {
		   lookupObject[arrayPictures[i]["color"]["name"]] = arrayPictures[i];
		}
   
		for(i in lookupObject) {
			newArray.push(lookupObject[i]);
		}
		return newArray;
	}
    
   	var arrayPicturesUnique = removeDuplicates();
   	
    return(
		<div className="colors-bar">
			{
				arrayPicturesUnique.map(function(boton, index){ 
					return <ColorBtn key={index} picture={boton.image} codeColor={boton.color.code} color={boton.color.name} changeColor={changeColor}></ColorBtn>
				})
			}
			
		</div>
		
    )
}
export default ColorsBar;