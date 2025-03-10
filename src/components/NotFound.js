import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>متاسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد</p>
      <button className="back-home" onClick={handleBackToHome}>
        بازگشت به صفحه اصلی
      </button>
    </div>
  );
};

export default NotFound;
