import React from "react";
import Accepted from '../../../assets/Icons/Accepted.svg'
import OrderListItem from "../../Molecules/MReusable/OrderListItem";
import Buttons from "../../Atoms/AReusable/Buttons";

const PurchaseTrue = () => {


  if( JSON.parse(localStorage.getItem('carrito')) && JSON.parse(localStorage.getItem('carrito')) !== [] && JSON.parse(localStorage.getItem('carrito')) !== undefined){
    var arrayItems = JSON.parse(localStorage.getItem('carrito'))
  }
  else{
    var arrayItems = []
  }  

  console.log("qaz", localStorage.getItem('nombre'))

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

//   {
//     "transactionState":1,
//     "description":"asd",
//     "referenceCode":"COMPRA1",
//     "amount":20000,
//     "tax":0,
//     "taxReturnBase": 0,
//     "currency": "COP",
//     "signature": "aqw899ASD32387ajwfrtd668",
//     "buyerEmail": "test@test.com",
//     "buyerFullName": "test test",
//     "shippingAddress": "Crr22",
//     "shippingCity": "Pasto",
//     "shippingCountry": "CO",
//     "telephone": "3100029774",
//     "paymentMethod": "MASTER CARD",
//     "paymentMethodType": "CREDIT CARD",
//     "purchaseProducts":[
//         {
//             "product":1,
//             "quantity":5,
//             "amount":5000
//         },
//         {
//             "product":2,
//             "quantity":2,
//             "amount":5000
//         }
//     ]
// }

  var transactionState = getParameterByName('transactionState');
  var description = getParameterByName('description');
  var referenceCode = getParameterByName('referenceCode');
  var TX_TAX = getParameterByName('TX_TAX');
  var TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE = getParameterByName('TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE');
  var currency = getParameterByName('currency');
  var signature = getParameterByName('signature');
  var buyerEmail = getParameterByName('buyerEmail');
  var telephone = getParameterByName('telephone');
  var lapPaymentMethod = getParameterByName('lapPaymentMethod');
  var lapPaymentMethodType = getParameterByName('lapPaymentMethodType');

  console.log("qwert", 
    transactionState, 
    description, 
    referenceCode, 
    //amount, 
    TX_TAX, 
    TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE, 
    currency, 
    signature, 
    buyerEmail, 
    //buyerFullName, 
    //shippingAddress, 
    // shippingCity, 
    // shippingCountry, 
    telephone, 
    lapPaymentMethod,
    lapPaymentMethodType,
    arrayPurchaseProducts
    )
    
  return (
    <div className="container-purchase-true">
      <div className="title-purchase">
        <i><img alt="acepted" src={Accepted}></img></i>
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
        <a href="/productos"><Buttons type="PayAgain" text="Seguir Comprando"></Buttons></a>
      </div>
    </div>
  );
};

export default PurchaseTrue