import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS
import "./FAQ.css"; // برای استایل‌های انیمیشن
import { RiArrowDownSLine } from "react-icons/ri";

const FAQ = () => {
  const faqs = [
    {
      question: "چه نوع محصولاتی را ارائه می‌دهید؟",
      answer:
        "ما انواع مختلفی از محصولات از جمله لباس، لوازم الکترونیکی و لوازم خانگی را ارائه می‌دهیم.",
    },
    {
      question: "آیا محصولات شما ضمانت دارند؟",
      answer: "بله، تمام محصولات ما با یک سال ضمانت ارائه می‌شوند.",
    },
    {
      question: "چگونه می‌توانم یک محصول را سفارش دهم؟",
      answer:
        "شما می‌توانید با مراجعه به صفحه محصول و کلیک بر روی دکمه 'خرید' سفارش خود را ثبت کنید.",
    },
    {
      question: "چه روش‌های پرداختی را قبول می‌کنید؟",
      answer:
        "ما روش‌های پرداخت مختلفی از جمله کارت اعتباری، PayPal و انتقال بانکی را قبول می‌کنیم.",
    },
    {
      question: "چگونه می‌توانم با پشتیبانی مشتریان تماس بگیرم؟",
      answer:
        "شما می‌توانید از طریق صفحه تماس با ما، با تیم پشتیبانی ما تماس بگیرید.",
    },
    {
      question: "زمان تخمینی تحویل سفارشات چقدر است؟",
      answer:
        "زمان تخمینی تحویل سفارشات بین سه روز تا یک هفته‌ی کاری می‌یاشد   ",
    },
    {
      question: "کالاهای قابل بازگشت و یا تعویض را چگونه ارسال کنیم؟",
      answer:
        "مشتریان عزیز در صورتی که قصد بازگشت و یا تعویض کالایی را دارید، پس از ثبت درخواست مرجوعی، کالای خود را برگشت دهید. ",
    },
    {
      question: "آیا روز جمعه و تعطیلات رسمی جز بازه ارسالی محسوب می شود ؟",
      answer:
        "خیر .به طور مثال سفارشی که با بازه ارسالی 2 روز  در روز پنج شنبه بعد از ساعت 8 صبح سفارشی ثبت شود تاریخ تعهد ارسال روز یکشنبه خواهد بود و اگر قبل از ساعت 8 صبح باشد روز شنبه خواهد بود. ",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null); // حالت برای ذخیره index سوال باز

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // باز و بسته کردن سوال
  };

  useEffect(() => {
    AOS.init({
      duration: 2000, // مدت زمان انیمیشن به میلی‌ثانیه
      easing: "ease-in-out", // نوع انیمیشن
      delay: 0, // تأخیر قبل از شروع انیمیشن به میلی‌ثانیه
    });
  }, []);

  return (
    <div className="container mt-5 text-right">
      <h2 className="text-center mb-5 firstTitle">سوالات متداول</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item mb-2">
          <h4
            className="bg-light p-3 rounded cursor-pointer titltQuestion"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <RiArrowDownSLine className="RiArrowDownSLine" />
          </h4>
          {openIndex === index && (
            <div className="p-3  bg-white fade" data-aos="fade">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
