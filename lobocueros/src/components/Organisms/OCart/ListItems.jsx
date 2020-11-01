import React from "react";
import ItemCart from "../../Molecules/MCart/ItemCart";
import { connect} from "react-redux";
import { setItemsInCart } from "../../../redux/actionsCreators";

const ListItems = (props) => {

  if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) != [] && JSON.parse(localStorage.getItem('carrito')) != undefined){
    var arrayItems = JSON.parse(localStorage.getItem('carrito'))
  }
  else{
    var arrayItems = []
  } 

  return (
    <>
      {
        arrayItems ? arrayItems.map(function(item, index){
          return <ItemCart item={item} index={index}></ItemCart>
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