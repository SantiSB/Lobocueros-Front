import React from "react";
import Header from "../Templates/TReusable/Header";
import Footer from "../Templates/TReusable/Footer";
import MainDetailProductos from "../Templates/TDetailProductos/MainDetailProductos";

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <header className="header-product-detail">
        <Header></Header>
      </header>
      <main className="main-detail-product">
        <MainDetailProductos></MainDetailProductos>
      </main>
      <footer className="footer-product-detail">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ProductDetail
