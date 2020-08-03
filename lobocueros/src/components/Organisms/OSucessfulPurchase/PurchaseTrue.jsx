import React from "react";
import Accepted from '../../../assets/Icons/Accepted.svg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OrderListItem from "../../Molecules/MReusable/OrderListItem";

const useStyles = makeStyles((theme) => ({
	btnBuyMore: {
		color: "#ffffff",
		border: "1px solid #ffffff",
		background: "#4CBC31",
		opacity: ".7",
    borderRadius: "100px",
    width: "70%"
	},
  }));

const PurchaseTrue = () => {
  const classes = useStyles();
  return (
    <div className="container-purchase-true">
      <div className="title-purchase">
        <i><img src={Accepted}></img></i>
        <p>Compra Exitosa</p>
      </div>
      <div className="list-products-purchase">
        <div>
          <OrderListItem></OrderListItem>
          <OrderListItem></OrderListItem>
          <OrderListItem></OrderListItem>
        </div>
      </div>
      <div className="btn-purchase-container">
        <Button className={classes.btnBuyMore} variant="outlined">SEGUIR COMPRANDO</Button>
      </div>
    </div>
  );
};

export default PurchaseTrue