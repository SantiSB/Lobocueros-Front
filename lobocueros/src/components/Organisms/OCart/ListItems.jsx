import React from "react";
import ItemCart from "../../Molecules/MCart/ItemCart";
import { connect} from "react-redux";
import { setItemsInCart } from "../../../redux/actionsCreators";

const ListItems = (props) => {
  var arrayItems = []
  if( JSON.parse(sessionStorage.getItem('carrito')) && JSON.parse(sessionStorage.getItem('carrito')) !== [] && JSON.parse(sessionStorage.getItem('carrito')) !== undefined){
    arrayItems = JSON.parse(sessionStorage.getItem('carrito'))
  }
  else{
    arrayItems = []
  } 

  return (
    <>
      {
        arrayItems ? arrayItems.map(function(item, index){
          return <ItemCart item={item} index={index} key={index}></ItemCart>
        }
        ) 
        : []
      }
       
    </>
  );
};

const mapStateToProps = (state) => ({
	itemsInCart: state.itemsInCart,
});
const mapDispatchToProps = {
	setItemsInCart,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ListItems);