import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	btnBanner: {
		color: "#ffffff",
		border: "1px solid #ffffff",
		background: "#DA2727",
		opacity: ".7",
		borderRadius: "100px",
	},
  }));


const ResumeBuy = () => {
  const classes = useStyles();
  return (
    <div className="resume-buy-container">
      <div className="info-resume">
        <p className="title-info-resume">Resumen del pedido</p>
        <div>
          <p>Subtotal: <span>$300.000</span></p>
          <p>Envio: <span>Gratis</span></p>
          <p className="total">Total: <span>$300.000</span></p>
        </div>
        
      </div>
      <div className="button-resume">
        <Button className={classes.btnBanner} variant="outlined">COMPRAR</Button>
      </div>
    </div>
  );
};

export default ResumeBuy