import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StartPage.css";

const StartPage = () => {
  return (
    <div className="container-start">
      <div className="sticky-div">
        <img src="images/home.avif" alt="iphone" className="my-image" />
        <div className="ArchiveTopBannerWrp">
          <h1 className="fs-5 border-end pe-1">آیفون</h1>
          <h2 className="text-muted fs-5 flex-grow-1 ps-1">Iphone</h2>
          <p>
            قیمت مناسب برای خرید انواع گوشی های آیفون اپل از طریق لینک های زیر
            ممکن شده است. موبایل های ایفون با داشتن امکانات بی نظیر در میان تلفن
            های هوشمند موجود در بازار، قابلیت های بی نظیری را در زمینه قدرت
            پردازش، دوربین با امکانات استثنایی و صفحه نمایش با طراحی ویژه و چشم
            نواز را در اختیار کاربران قرار می دهد
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
