import React from "react";
import "./Animation.css";

const NewsTicker = () => {
  return (
    <div className="news-ticker">
      <div className="news-content">
        <img
          src="/images/iPhone-12-pro-max.jpg"
          alt=" 1"
          style={{ height: "50px" }}
        />
        <img
          src="/images/iPhone-14-pro-max.jpg"
          alt=" 2"
          style={{ height: "50px", marginLeft: "20px" }}
        />
        <img
          src="/images/iPhone-14-plus.jpg"
          alt=" 3"
          style={{ height: "50px", marginLeft: "20px" }}
        />
      </div>
    </div>
  );
};

export default NewsTicker;
