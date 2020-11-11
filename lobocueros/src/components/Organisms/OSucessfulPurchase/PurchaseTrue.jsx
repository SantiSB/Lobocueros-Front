import React, {useState} from "react";
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


  console.log("qwer", apiKey);

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
  var VpseBanck = getParameterByName('pseBank');
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

  console.log("juanita", Vfirma, VfirmaCreada)

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
          ? <a href="/productos" onClick={()=>localStorage.clear()}><Buttons type="PayAgain" text="Seguir Comprando"></Buttons></a>
          : <a href="/carrito" ><Buttons type="PayAgain" text="Volver a Intentar"></Buttons></a>
      }
      
      </div>
      {
        Vfirma == VfirmaCreada 
        ? <div>
            <h2>Resumen de la Transacción</h2>
            <p>Estado de la transaccion</p>
            <p>ID de la transaccion</p>
            <p>Referencia de la venta</p>
            <p>Referencia de la transaccion</p>
            {
              VpseBanck != null 
              ? <div>
                  <p>cus</p>
                  <p>Banco</p>
                </div>
              : ""
            }
            <p>Valor total</p>
            <p>Moneda</p>
            <p>Descripción</p>
            <p>Entidad</p>
            
          </div>
        : <h1>Error validando firma digital.</h1>
      }
    </div>
  );
};

export default PurchaseTrue