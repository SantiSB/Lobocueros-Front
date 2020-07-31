import React from "react";
import Header from "../Templates/TReusable/Header";
import Footer from "../Templates/TReusable/Footer";
import MainResume from "../Templates/TResume/MainResume";

const Resume = () => {
  return (
    <div className="home">
      <div className="header">
        <Header></Header>
      </div>
      <main className="main-resume">
        <MainResume></MainResume>
      </main>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Resume
