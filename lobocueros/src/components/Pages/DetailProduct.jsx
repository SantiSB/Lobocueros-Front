import React from "react";
import Header from "../Templates/TReusable/Header";
import Footer from "../Templates/TReusable/Footer";
import MainDetailProductos from "../Templates/TDetailProductos/MainDetailProductos";

const Home = () => {
  return (
    <div className="home">
      <header className="header-home">
        <Header></Header>
      </header>
      <main className="main-home">
        <MainDetailProductos></MainDetailProductos>
      </main>
      <footer className="footer-home">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home
