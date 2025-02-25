import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "iPhone 15 pro",
    price: 1200,
    image: "/images/iphone-15-pro.jpg",
  },
  {
    id: 2,
    name: "iPhone 12",
    price: 2500,
    image: "/images/iPhone-12.webp",
  },
  {
    id: 3,
    name: "iPhone 14 pro",
    price: 250,
    image: "/images/iPhone-14-pro.jpg",
  },
  {
    id: 4,
    name: "iPhone 16 pro Max",
    price: 250,
    image: "/images/iPhone-16-pro-max.webp",
  },
  {
    id: 5,
    name: "iPhone 11",
    price: 250,
    image: "/images/iPhone-11.jpg",
  },
  {
    id: 6,
    name:"iPhone 11 Pro",
    price: 250,
    image: "/images/iPhone-11-pro.jpg",
  },
  {
    id: 7,
    name: "iPhone se 2022",
    price: 250,
    image: "/images/iPhone-se-2022.jpg",
  },
  {
    id: 8,
    name: "iPhone se 2020",
    price: 250,
    image: "/images/iPhone-se-2020.jpg",
  },
  {
    id: 9,
    name: "iPhone 14 plus",
    price: 250,
    image: "/images/iPhone-14-plus.jpg",
  },
  {
    id: 10,
    name: "iPhone 14 Pro Max",
    price: 250,
    image: "/images/iPhone-14-pro-max.jpg",
  },
  {
    id: 11,
    name: "iPhone 12 pro",
    price: 250,
    image: "/images/iPhone-12-pro-max.jpg",
  },
  {
    id: 12,
    name: "iPhone xr",
    price: 250,
    image: "/images/iPhone-xr.jpg",
  },
];

const Products = ({ addToCart }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">محصولات ما</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card shadow-lg mb-4 product-card">
              <img
                src={product.image}
                className="card-img-top mypic"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text fw-bold text-danger">
                  ${product.price}
                </p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  مشاهده
                </Link>
                <button 
                  className="btn btn-warning mt-2" 
                  onClick={() => addToCart(product.price)}
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;