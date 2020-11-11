import React from "react";
import Failed from '../../../assets/Icons/Failed.svg'
import Accepted from '../../../assets/Icons/Accepted.svg'
import OrderListItem from "../../Molecules/MReusable/OrderListItem";
import Buttons from "../../Atoms/AReusable/Buttons";
import axios from 'axios';

const PurchaseTrue = () => {


  if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) !== [] && JSON.parse(localStorage.getItem('carrito')) !== undefined){
    var arrayItems = JSON.parse(localStorage.getItem('carrito'))
  }
  else{
    var arrayItems = []
  }  

  var valores = []
  const getValores = arrayItems.map(function(item) {
    valores.push(item.totalPrice)
  })

  let total = valores.reduce((a, b) => a + b, 0);

  console.log("qaz", localStorage.getItem('nombre'))
  console.log("qaz", localStorage.getItem('ciudad'))
  console.log("qaz", localStorage.getItem('cedula'))
  console.log("qaz", localStorage.getItem('direccion'))
  console.log("qaz", localStorage.getItem('telefono'))

  var arrayPurchaseProducts = []
  arrayItems.map(function(product){
    var purchaseProduct = {
      "product": product.id,
      "quantity": product.udsItem,
      "amount": product.totalPrice
    };
    arrayPurchaseProducts.push(purchaseProduct)
  })

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(window.location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  var VtransactionState = getParameterByName('transactionState');
  var Vdescription = getParameterByName('description');
  var VreferenceCode = getParameterByName('referenceCode');
  var VTX_TAX = getParameterByName('TX_TAX');
  var VTX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE = getParameterByName('TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE');
  var Vcurrency = getParameterByName('currency');
  var Vamount = total;
  var Vsignature = getParameterByName('signature');
  var VbuyerEmail = getParameterByName('buyerEmail');
  var VbuyerFullName = localStorage.getItem('nombre');
  var VshippingAddress = localStorage.getItem('direccion')
  var VshippingCity = localStorage.getItem('ciudad')
  var VshippingCountry = "CO";
  var Vtelephone = getParameterByName('telephone');
  var VlapPaymentMethod = getParameterByName('lapPaymentMethod');
  var VlapPaymentMethodType = getParameterByName('lapPaymentMethodType');

  var purchase = {
    "transactionState": VtransactionState,
    "description": Vdescription,
    "referenceCode": VreferenceCode,
    "tax": VTX_TAX,
    "taxReturnBase": VTX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE,
    "currency": Vcurrency,
    "amount": Vamount,
    "signature": Vsignature,
    "buyerEmail": VbuyerEmail,
    "buyerFullName": VbuyerFullName,
    "shippingAddress": VshippingAddress,
    "shippingCity": VshippingCity,
    "shippingCountry": VshippingCountry,
    "telephone": Vtelephone,
    "paymentMethod": VlapPaymentMethod,
    "paymentMethodType" : VlapPaymentMethodType,
    "purchaseProducts": arrayPurchaseProducts
  };

  axios.post('https://lobocuerosapi.com/purchases/', {
      "transactionState": VtransactionState,
      "description": Vdescription,
      "referenceCode": VreferenceCode,
      "tax": VTX_TAX,
      "taxReturnBase": VTX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE,
      "currency": Vcurrency,
      "amount": Vamount,
      "signature": Vsignature,
      "buyerEmail": VbuyerEmail,
      "buyerFullName": VbuyerFullName,
      "shippingAddress": VshippingAddress,
      "shippingCity": VshippingCity,
      "shippingCountry": VshippingCountry,
      "telephone": Vtelephone,
      "paymentMethod": VlapPaymentMethod,
      "paymentMethodType" : VlapPaymentMethodType,
      "purchaseProducts": arrayPurchaseProducts
    
  })
    .then(function(res) {
      if(res.status==201) {
        // mensaje.innerHTML = 'Se han enviado los datos' + res.data.id;
        console.log("qwe", res)
      }
    })
    .catch(function(err) {
      console.log("qwe", err);
    })
    .then(function() {
      // loading.style.display = 'none';
    }); 

    

  return (
    <div className="container-purchase-true">
      <div className="title-purchase">
        {VtransactionState === "4" 
          ? <i><img alt="acepted" src={Accepted}></img></i>
          : <i><img alt="FAILDED" src={Failed}></img></i>
        }
        {VtransactionState === "4" 
          ? <p>Compra Exitosa</p>
          : <p>Compra Fallida</p>
        }
        
      </div>
      <div className="list-products-purchase">
        <div>
        {
          arrayItems ? arrayItems.map(function(item, index){
            return <OrderListItem item={item} index={index}></OrderListItem>
          } 
          ) 
          : []
        }
        </div>
      </div>
      <div className="btn-purchase-container">
      {VtransactionState === "4" 
          ? <a href="/productos" onClick={()=>localStorage.clear()}><Buttons type="PayAgain" text="Seguir Comprando"></Buttons></a>
          : <a href="/carrito" ><Buttons type="PayAgain" text="Volver a Intentar"></Buttons></a>
        }
      </div>
    </div>
  );
};

export default PurchaseTrue