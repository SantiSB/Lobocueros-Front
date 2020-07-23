import React from "react";
import Header from "../Templates/TReusable/Header";
import Footer from "../Templates/TReusable/Footer";
import MainHome from "../Templates/THome/MainHome";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <Header></Header>
      </div>
      <main className="main-home">
        {/* <MainHome></MainHome> */}
      </main>
      <div className="footer">
        <Footer></Footer>

      </div>
    </div>
  );
};

export default Home
