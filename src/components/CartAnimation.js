import React, { useEffect } from "react";
import "./CartAnimation.css"; // فایل CSS انیمیشن

const CartAnimation = ({ animate, onAnimationEnd }) => {
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        onAnimationEnd(); // برگرداندن حالت بعد از انیمیشن
      }, 1000); // مدت زمان انیمیشن

      return () => clearTimeout(timer); // پاک کردن تایمر در صورت unmount
    }
  }, [animate, onAnimationEnd]);

  return (
    <div className={`cart-icon ${animate ? "animate" : ""}`}></div>
  );
};

export default CartAnimation;
