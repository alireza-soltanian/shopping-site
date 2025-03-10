import React from "react";
import { Link } from "react-router-dom";
import { TfiThemifyLogo } from "react-icons/tfi";
import { GiShoppingCart } from "react-icons/gi";
import { TbLogin } from "react-icons/tb";
import "./Header.css"
import ThemeToggle from './ThemeToggle';


const Header = ({ cart }) => {


  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light navColo" >
      <div className="container">
        <div className="d-flex align-items-center">


          <Link to="/cart" className="me-3">
            <GiShoppingCart className="GiShoppingCart" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
          <Link className="nav-link" to="/login">
            <TbLogin className="TbLogin" />
          </Link>

        </div>
    
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <ThemeToggle />
              <Link className="nav-link headerTitle" to="/">
                صفحه اصلی
              </Link>
            </li>
            <li className="nav-item headerTitle selectedProducts">
              <Link className="nav-link" to="/products">
                محصولات
              </Link>
            </li>
            <li className="nav-item headerTitle">
              
              <Link className="nav-link" to="/about-us">
                پشتیبانی
              </Link>
           
            </li>

            <li className="nav-item ">
            <Link className="navbar-brand fw-bold ms-auto" to="/">
            <TfiThemifyLogo className="TfiThemifyLogo" />
          </Link>
          </li>

          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
