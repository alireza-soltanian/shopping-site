import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        if (response.data) {
          setProduct(response.data);
        } else {
          console.error("Product not found.");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">در حال بارگذاری...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return <h2 className="text-center">404</h2>;
  }

  return (
    <div className="container mt-5 product-details">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid product-image"
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">{product.title}</h1>
          <p className="description">{product.description}</p>
          <p className="price">قیمت: ${product.price}</p>
          <button
            className="btn btn-primary btn-buy"
            onClick={() => addToCart(product)}
          >
            خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
