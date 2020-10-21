import React from "react";
import ItemCart from "../../Molecules/MCart/ItemCart";
import { connect} from "react-redux";
import { setItemsInCart } from "../../../redux/actionsCreators";

const ListItems = (props) => { 
  console.log("qazx", JSON.parse(localStorage.getItem('carrito')))
  return (
    <>
      {
        JSON.parse(localStorage.getItem('carrito')).map(function(item){
          return <ItemCart></ItemCart>
        })
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