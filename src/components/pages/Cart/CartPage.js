import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../store/cartSlice';
import './CartPage.css'


const CartPage = () => {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-info">
            <img src={item.image} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
            </div>
          </div>
          <div className="cart-item-actions">
            <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
          </div>
          <div className="cart-item-total">${item.totalPrice}</div>
        </div>
      ))}
      <div className="cart-total">
        <h2>Total amount: ${totalAmount}</h2>
      </div>
      <button className="btn-back" onClick={() => window.history.back()}>Back to Catalog</button>
      <button className="btn-continue">Continue</button>
    </div>
  );
};

export default CartPage;
