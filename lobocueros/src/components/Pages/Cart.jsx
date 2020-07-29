import React from "react";
import Header from "../Templates/TReusable/Header";
import Footer from "../Templates/TReusable/Footer";
import MainCart from "../Templates/TCart/MainCart";

const Cart = () => {
  return (
    <div className="home">
      <div className="header">
        <Header></Header>
      </div>
      <main className="main-cart">
        <MainCart></MainCart>
      </main>
      <div className="footer">
        <Footer></Footer>

      </div>
    </div>
  );
};

export default Cart
