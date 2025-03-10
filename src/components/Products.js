import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Products.css";
import { FaCartPlus } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import CartAnimation from "./CartAnimation";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [delayLoading, setDelayLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);

        setTimeout(() => {
          setDelayLoading(false);
        }, 3500);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        setDelayLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      let truncated = text.substring(0, maxLength);
      return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
    }
    return text;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  };

  return (
    <div className="container mt-5">
      {loading || delayLoading ? (
        <SkeletonTheme baseColor="#C8C8C8" highlightColor="#707070">
          <div className="row">
            {[...Array(20)].map((_, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card product-card">
                  <Skeleton height={200} />
                  <div className="card-body">
                    <Skeleton count={2} />
                    <Skeleton width={80} height={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SkeletonTheme>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card product-card">
                <img
                  src={product.image}
                  className="card-img-top mypic"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5>{truncateText(product.description, 55)}</h5>
                  <p className="card-text">${product.price}</p>
                  <div className="btn-group" role="group">
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-warning warning"
                    >
                      <CgDetailsMore className="CgDetailsMore" />
                      جزئیات
                    </Link>
                    <button
                      className="btn btn-dark dark"
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaCartPlus className="FaCartPlus" />
                      خرید مستقیم
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <CartAnimation
        animate={animate}
        onAnimationEnd={() => setAnimate(false)}
      />
    </div>
  );
};

export default Products;
