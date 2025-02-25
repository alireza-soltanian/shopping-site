import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <FaStore className="Logo" />
        </Link>
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
              <Link className="nav-link" to="/">
                صفحه اصلی
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                محصولات
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                درباره ما
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
              <TiShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
