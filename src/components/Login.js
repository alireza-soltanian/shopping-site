import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { IoEnter } from "react-icons/io5";
import { GiArchiveRegister } from "react-icons/gi";

const Login = () => {
  return (
    <div className="loginCont ">
    <div className="login-container ">
      <h3 className="mb-3 ">ورود به حساب کاربری</h3>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control name" placeholder="نام کاربری یا ایمیل" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control name" placeholder="رمز عبور" />
        </div>
        <div className="mb-3 text-end">
          <a href="#login" className="forgot-password">رمز عبور را فراموش کرده‌اید؟</a>
        </div>
        <button type="submit" className="btn btn-success w-100 py-2"><IoEnter  className="FcGoogle"/>ورود</button>
        <button type="submit" className="btn btn-primary w-100 py-2 register"><GiArchiveRegister  className="FcGoogle"/>ثبت نام</button>

        <button className="btn btn-google w-100 py- mt-2"><FcGoogle  className=" FcGoogle"/>ورود با گوگل</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
