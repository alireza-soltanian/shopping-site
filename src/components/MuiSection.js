import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MuiSection.css";

const BootstrapSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
    navigate("/NotFound");
  };

  return (
    <div className="container  custom-container">
      <div className="row align-items-center p-4  custom-section">
        <div className="col-md-6 d-flex flex-column align-items-end text-end">
          <h4 className="custom-title">
            خرید اقساطی کالا با طرح قرض الحسنه مائده
            <br />
            (بانک توسعه تعاون)
          </h4>
          <button className="btn custom-button mt-3 " onClick={handleButtonClick}>
            راهنمای خرید
          </button>
        </div>
        <div className="col-md-6 text-center">
          <img src="/images/BANER1.jpg" alt="خرید اقساطی" className="custom-image" />
        </div>
      </div>
    </div>
  );
};

export default BootstrapSection;