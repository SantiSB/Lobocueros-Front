import React from "react";
import Header from "../Templates/TReusable/Header";
import Footer from "../Templates/TReusable/Footer";
import MainFailedPurchase from "../Templates/TFailedPurchase/MainFailedPurchase";

const FailedPurchase = () => {
  return (
    <div className="home">
      <div className="header">
        <Header></Header>
      </div>
      <main className="main-resume">
        <MainFailedPurchase></MainFailedPurchase>
      </main>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default FailedPurchase
