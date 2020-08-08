import React from "react";
import Header from "../Templates/TReusable/Header";
import Footer from "../Templates/TReusable/Footer";
import MainAbout from "../Templates/TAbout/MainAbout";

const About = () => {
  return (
    <div className="home">
      <header className="header-home">
        <Header></Header>
      </header>
      <main className="main-home">
        <MainAbout></MainAbout>
      </main>
      <footer className="footer-home">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default About
