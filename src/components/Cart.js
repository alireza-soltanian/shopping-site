import React from 'react';

const Cart = ({ itemCount, totalPrice }) => {
  return (
    <div className="cart-icon">
      <img src="/path/to/cart-icon.png" alt="Cart" />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
      <div className="total-price">مجموع: ${totalPrice}</div>
    </div>
  );
};

export default Cart;