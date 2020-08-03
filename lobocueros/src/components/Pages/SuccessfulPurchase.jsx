import React from "react";
import Header from "../Templates/TReusable/Header";
import Footer from "../Templates/TReusable/Footer";
import MainSuccessfulPurchase from "../Templates/TSuccessfulPurchase/MainSuccessfulPurchase";

const SuccessfulPurchase = () => {
  return (
    <div className="home">
      <div className="header">
        <Header></Header>
      </div>
      <main className="main-resume">
        <MainSuccessfulPurchase></MainSuccessfulPurchase>
      </main>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default SuccessfulPurchase
