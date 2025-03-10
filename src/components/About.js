import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container custom-container">
      <div className="row align-items-center p-4 aboutsection">
        <div className="col-md-6 d-flex flex-column align-items-start text-start">
          <img src="/images/us.jpg" alt="خرید اقساطی" className="aboutImage" />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-end text-end">
          <h4 className="custom-title">پشتیبانی آنلاین 24 ساعته</h4>
          <h6 className="aboutText">
            با درج سوالات و پیشنهادات در بخش پشتیبانی سامانه نسبت به پیگیری
            موارد اقدام نمایید. امکان ارتباط تلفنی با کارشناسان مرکز تماس به
            شماره 64380000 فراهم گردیده است.
          </h6>
          <button className="btn btn-primary btnAbout">
          مرکز تماس
          <span className="numAbout">۰۲۱ ۶۴۳۸۰۰۰۰ </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
