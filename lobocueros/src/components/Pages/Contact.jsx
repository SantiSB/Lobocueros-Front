import React from "react";
import Header from "../Templates/TReusable/Header";
import Footer from "../Templates/TReusable/Footer";
import MainContact from "../Templates/TContact/MainContact";

const Contact = () => {
  return (
    <div className="home">
      <header className="header-contact">
        <Header></Header>
      </header>
      <main className="main-contact">
        <MainContact></MainContact>
      </main>
      <footer className="footer-contact">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Contact
