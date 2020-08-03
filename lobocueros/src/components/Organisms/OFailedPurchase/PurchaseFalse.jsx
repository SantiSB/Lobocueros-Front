import React from "react";
import Failed from '../../../assets/Icons/Failed.svg'
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

const PurchaseFalse = () => {
  const classes = useStyles();
  return (
    <div className="container-purchase-true">
      <div className="title-purchase">
        <i><img src={Failed}></img></i>
        <p>Compra Fallida</p>
      </div>
      <div className="list-products-purchase">
        <p>Hubo un error al procesar tu pago</p>
        <p>¿Que puedo hacer?</p>
        <p>Usa otra tarjeta u otro medio de pago</p>
      </div>
      <div className="btn-purchase-container">
        <Button className={classes.btnBuyMore} variant="outlined">PAGAR CON OTRO MEDIO</Button>
      </div>
    </div>
  );
};

export default PurchaseFalse