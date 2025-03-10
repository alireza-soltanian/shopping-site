import React, { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import "./Cart.css";

const Cart = ({
  cart,
  removeFromCart,
  removeOneFromCart,
  clearCart,
  updateQuantity,
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getTotalPrice = () => {
    const total = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  const handleOpenModal = (productId) => {
    setSelectedProduct(productId);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleConfirmDelete = () => {
    if (selectedProduct === "clear") {
      clearCart();
    } else if (selectedProduct) {
      removeFromCart(selectedProduct);
    }
    handleCloseModal();
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      let truncated = text.substring(0, maxLength);
      return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
    }
    return text;
  };

  return (
    <div className="cart container mt-5">
      <h2 className="text-center mb-4">سبد خرید</h2>
      {cart.length === 0 ? (
        <p className="text-center">سبد خرید شما خالی است</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item d-flex align-items-center border-bottom py-3"
            >
              <button
                className="btn btn-danger mt-5 delete"
                onClick={() => handleOpenModal(item.id)}
              >
                <FaTrash />
              </button>
              <div className="flex-grow-1 ms-3">
              <h5 className="cart-item-title">{truncateText(item.title, 50)}</h5>
              <p className="cart-item-price">${item.price}</p>
                <div className="quantity-controls d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary me-1"
                    onClick={() =>
                      removeOneFromCart(item.id, item.quantity - 1)
                    }
                  >
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary mx-2"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <FaPlus />
                  </button>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                </div>
              </div>
            </div>
          ))}
          <h3 className="total-price text-center">
            جمع قیمت: ${getTotalPrice()}
          </h3>
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-danger pay btn-sm me-3"
              onClick={() => handleOpenModal("clear")}
            >
              حذف همه
            </button>
            <button
              className="btn btn-success pay btn-sm"
              onClick={() => navigate("/NotFound")}
            >
              پرداخت
            </button>
          </div>
        </div>
      )}

      <DeleteConfirmationModal
        open={open}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default Cart;
