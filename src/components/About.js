import React from "react";
import "./About.css";
import { GiLoveMystery } from "react-icons/gi";

const About = () => {
  return (
    <div className="about-container" id="about-us">
      <img src="./images/us.jpg" alt="us" />
      <h2 className="text1">ثمین رای کمپانی، خانه‌ عاشقان فناوری</h2>
      <div className="firstp">
        <GiLoveMystery className="GiLoveMystery" />

        <p className="text2">
          شرکت فناوری اطلاعات و ارتباطات ثمین‌رای (سهامی خاص ) در آذرماه سال
          1381 با هدف ارائه خدمات مهندسی در زمینه فناوری اطلاعات و ارتباطات توسط
          گروهی از متخصصان این صنعت تشکیل و با سازماندهی و ایجاد زیرساخت‌های
          مهارتی وارد عرصه فعالیت شد. فعاليت‌های ثمين‌رای در حوزه‌های بانکداری،
          بانکداری نوین (الکترونیک)، سیستم‌های مدیریت هوشمند (BMS)، ارتباطات و
          امنيت فناوری اطلاعات و با اولويت ارائه خدمات مهندسی و بازرگانی حرفه‌ای
          مي‌باشد.
          <br/>
          واکنون تصمیم گرفته تا پای خودرا فراتر از حوضه‌ی خود بگذارد و فروشگاهی جهت خرید راحت تر و رفاه پرسنل خود ایجاد نماید.
        </p>
      </div>
    </div>
  );
};

export default About;
