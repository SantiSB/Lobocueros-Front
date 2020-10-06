import { colors } from '@material-ui/core';
import React from 'react';
import ColorBtn from '../../Atoms/AReusable/ColorBtn';

const ColorsBar = (props) => {
	const colors = props.colors != null ? props.colors : []
	const productDetail = props.productDetail != null ? props.productDetail : {}
	const picturesColor = productDetail.pictures != null ? productDetail.pictures : []
	var arrayPictures = []
	const pictureColor = picturesColor.map(function(e){
		arrayPictures.push(e)
	})

	function removeDuplicates() {
		var newArray = [];
		var lookupObject  = {};
   
		for(var i in arrayPictures) {
		   lookupObject[arrayPictures[i]["colorPicture"]] = arrayPictures[i];
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
				arrayPicturesUnique.map(function(boton){
					return <ColorBtn picture={boton.img} codeColor={boton.codeColor} color={boton.colorPicture}></ColorBtn>
				})
			}
			{/* <ColorBtn color="#ffffff"></ColorBtn> */}
		</div>
		
    )
}
export default ColorsBar;