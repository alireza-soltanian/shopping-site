import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css"; 
import AOS from "aos"; 
import "./ThreeBoxes.css";

const ThreeBoxes = () => {
  const [ratings, setRatings] = useState([0, 0, 0]);
  const [hoveredRating, setHoveredRating] = useState([0, 0, 0]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 0,
    });
    const storedRatings = JSON.parse(localStorage.getItem("ratings"));
    if (storedRatings) {
      setRatings(storedRatings);
    }
  }, []);

  const handleRating = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);

    localStorage.setItem("ratings", JSON.stringify(newRatings));
  };

  const renderStars = (index) => {
    const fullStars = hoveredRating[index] || Math.floor(ratings[index]);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={
            i <= fullStars
              ? "bi bi-star-fill text-warning"
              : "bi bi-star text-warning"
          }
          style={{ fontSize: "28px", cursor: "pointer" }}
          onMouseEnter={() =>
            setHoveredRating((prev) => {
              const newHovered = [...prev];
              newHovered[index] = i; 
              return newHovered;
            })
          }
          onMouseLeave={() =>
            setHoveredRating((prev) => {
              const newHovered = [...prev];
              newHovered[index] = 0;
              return newHovered;
            })
          }
          onClick={() => handleRating(index, i)}
        ></i>
      );
    }
    return stars;
  };


  const boxContents = [
    { title: "کیفیت", content: "کیفیت محصولات/خدمات ما چقدر راضی‌کننده بود؟" },
    { title: "پشتیبانی", content: " چقدر  پشتیبانی سایت ما برای شما راضی کنده هست؟" },
    {
      title: "معرفی",
      content: "چقدر احتمال داره که ما را به دوستان و آشنایان خود معرفی ‌کنید؟",
    },
  ];

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-5 opinion">!نظرات شما مهم است</h2>
      <div className="row">
        {boxContents.map((box, boxIndex) => (
          <div className="col-md-4" key={boxIndex} data-aos="slide-up" data-aos-delay={`${boxIndex * 400}`}>
            <div
              className="cardThree text-center"
              style={{
                padding: "65px",
                height: "350px", 
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
                borderRadius: "25px",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <h5 className="large-font">{box.title}</h5>
              <p className="large-font">{box.content}</p>

              <div className="rating">{renderStars(boxIndex)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeBoxes;
