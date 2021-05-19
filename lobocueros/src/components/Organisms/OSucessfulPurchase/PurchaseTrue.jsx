import React, {useState} from "react";
import Failed from '../../../assets/Icons/Failed.svg'
import Accepted from '../../../assets/Icons/Accepted.svg'
import OrderListItem from "../../Molecules/MReusable/OrderListItem";
import Buttons from "../../Atoms/AReusable/Buttons";
import axios from 'axios';

const PurchaseTrue = () => {

  var arrayItems = [] 
  if( JSON.parse(sessionStorage.getItem('carrito')) && JSON.parse(sessionStorage.getItem('carrito')) !== [] && JSON.parse(sessionStorage.getItem('carrito')) !== undefined){
    arrayItems = JSON.parse(sessionStorage.getItem('carrito'))
  }
  else{
    arrayItems = []
  }  

  var valores = []
  const getValores = arrayItems.map(function(item) {
    valores.push(item.totalPrice)
  })

  let total = valores.reduce((a, b) => a + b, 0);

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
  var md5 = require('md5');

  const [apiKey, setApiKey] = useState("")
  const [merchantId, setMerchantId] = useState("")

  axios
    .get(
      'https://lobocuerosapi.com/companyInformation/?limit=10'
      
    )
    .then((response) => {
      function esApiKey(element) { 
        return element.name == 'apikey-test';
      }
      function esMerchantId(element) { 
        return element.name == 'merchantId-test';
      }
      setApiKey(response.data.results.find(esApiKey).value)
      setMerchantId(response.data.results.find(esMerchantId).value)
      // apiKey = response.data.results.find(esApiKey).value
    })
    .catch((e) => {
    });



  var VtransactionState = getParameterByName('transactionState');
  var VtransactionId = getParameterByName('transactionId');
  var VreferencePool = getParameterByName('reference_pol');
  var VreferenceCode = getParameterByName('referenceCode');
  var Vcus = getParameterByName('cus');
  var Vdescription = getParameterByName('description');
  var VTX_TAX = getParameterByName('TX_TAX');
  var VTX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE = getParameterByName('TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE');
  var Vcurrency = getParameterByName('currency');
  var Vamount = total;
  var Vsignature = getParameterByName('signature');
  var VbuyerEmail = getParameterByName('buyerEmail');
  var VbuyerFullName = sessionStorage.getItem('nombre');
  var VshippingAddress = sessionStorage.getItem('direccion')
  var VshippingCity = sessionStorage.getItem('ciudad')
  var VpseBank = getParameterByName('pseBank');
  var VshippingCountry = "CO";
  var Vtelephone = getParameterByName('telephone');
  var VmerchantId = getParameterByName('merchantId');
  var VlapPaymentMethod = getParameterByName('lapPaymentMethod');
  var VlapPaymentMethodType = getParameterByName('lapPaymentMethodType');
  var Vfirma = getParameterByName('signature');
  var value =  Math.round(getParameterByName('TX_VALUE')*100)/100;
  var VTX_VALUE =  value.toFixed(1);
  var firma_cadena = `${apiKey}~${VmerchantId}~${VreferenceCode}~${VTX_VALUE}~${Vcurrency}~${VtransactionState}`;
  var VfirmaCreada = md5(firma_cadena);

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
    
  }).then(function(res) {
      if(res.status==201) {
        // mensaje.innerHTML = 'Se han enviado los datos' + res.data.id;
      }
    })
    .catch(function(err) {
    })
    .then(function() {
    }); 
  
  
  
  return (
    <div className="container-purchase-true">
      <div className="title-purchase">
        {VtransactionState === "4" 
          ? <i><img alt="acepted" src={Accepted}></img></i>
          : VtransactionState === "6" 
            ? <i><img alt="failed" src={Failed}></img></i>
            : VtransactionState === "7" 
              ? <i><img alt="failed" src={Failed}></img></i>
              : VtransactionState === "104" 
              ? <i><img alt="failed" src={Failed}></img></i>
              : <i><img alt="failed" src={Failed}></img></i>
        }
        {
          VtransactionState === "4" 
          ? <p>Compra Exitosa</p>
          : VtransactionState === "6" 
            ? <p>Transacción rechazada</p>
            : VtransactionState === "7" 
              ? <p>Error</p>
              : VtransactionState === "104" 
              ? <p>Transacción pendiente</p>
              : <p>Ocurrió un error en la transaccion</p>
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
          ? <a href="/productos" onClick={()=>sessionStorage.clear()}><Buttons type="PayAgain" text="Seguir Comprando"></Buttons></a>
          : <a href="/carrito" ><Buttons type="PayAgain" text="Volver a Intentar"></Buttons></a>
      }
      
      </div>
      
      {
        Vfirma == VfirmaCreada 
        ? <div className="resume-purchase">
            <h1>Resumen de la Transacción</h1>
            <hr></hr>
            <br></br>

            <h3>Estado de la transaccion</h3>
            <p>{VtransactionState}</p>
            <h3>ID de la transaccion</h3>
            <p>{VtransactionId}</p>
            <h3>Referencia de la venta</h3>
            <p>{VreferencePool}</p>
            <h3>Referencia de la transaccion</h3>
            <p>{VreferenceCode}</p>
            {
              VpseBank != null && VpseBank != ""
              ? <div>
                  <h3>cus</h3>
                  <p>{Vcus}</p>
                  <h3>Banco</h3>
                  <p>{VpseBank}</p>
                </div>
              : ""
            }
            <h3>Valor total</h3>
            <p>{value}</p>
            <h3>Moneda</h3>
            <p>{Vcurrency}</p>
            <h3>Descripción</h3>
            <p>{Vdescription}</p>
            <h3>Entidad</h3>
            <p>{VlapPaymentMethod}</p>
            
          </div>
        : <h1>Error validando firma digital.</h1>
      }
    </div>
  );
};

export default PurchaseTrue