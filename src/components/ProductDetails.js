import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartProvider";

const products = [
  {
    id: 1,
    name: "iPhone 15 pro",
    price: 1200,
    image: "/images/iphone-15-pro.jpg",
    description: "Best iPhone ever!",
  },
  {
    id: 2,
    name: "iPhone 12",
    price: 2500,
    image: "/images/iPhone-12.webp",
    description: "Powerful laptop for professionals.",
  },
  {
    id: 3,
    name: "iPhone 14 pro",
    price: 250,
    image: "/images/iPhone-14-pro.jpg",
    description: "Noise-canceling wireless earbuds.",
  },
  {
    id: 4,
    name:  "iPhone 16 pro Max",
    price: 250,
    image:  "/images/iPhone-16-pro-max.webp",
    description: "Noise-canceling wireless earbuds.",
  },
  {
    id: 5,
    name:"iPhone 11",
    price: 250,
    image: "/images/iPhone-11.jpg",
    description: "Noise-canceling wireless earbuds.",
  },
  {
    id: 6,
    name: "iPhone 11 Pro",
    price: 250,
    image: "/images/iPhone-11-pro.jpg",
    description: "Noise-canceling wireless earbuds.",
  },
  {
    id: 7,
    name: "iPhone se 2022",
    price: 250,
    image: "/images/iPhone-se-2022.jpg",
    description: "Noise-canceling wireless earbuds.",
  },
  {
    id: 8,
    name: "iPhone se 2020",
    price: 250,
    image: "/images/iPhone-se-2020.jpg",
    description: "Noise-canceling wireless earbuds.",
  },
  {
    id: 9,
    name:  "iPhone 14 plus",
    price: 250,
    image: "/images/iPhone-14-plus.jpg",
    description: "Noise-canceling wireless earbuds.",
  },
  {
    id: 10,
    name:"iPhone 14 Pro Max",
    price: 250,
    image: "/images/iPhone-14-pro-max.jpg",
    description: "Noise-canceling wireless earbuds.",
  },
  {
    id: 11,
    name: "iPhone 12 pro Max",
    price: 250,
    image: "/images/iPhone-12-pro-max.jpg",
    description: "Noise-canceling wireless earbuds.",
  },
  {
    id: 12,
    name: "iPhone xr",
    price: 250,
    image:  "/images/iPhone-xr.jpg",
    description: "Noise-canceling wireless earbuds.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const { addToCart } = useCart();

  if (!product) {
    return <h2 className="text-center text-danger mt-5">محصول پیدا نشد!</h2>;
  }

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product.price);
    } else {
      console.error("addToCart is not defined");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            className="img-fluid rounded shadow"
            alt={product.name}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <h3 className="text-success">${product.price}</h3>
          <button
            className="btn btn-warning btn-lg mt-3"
            onClick={handleAddToCart}
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
