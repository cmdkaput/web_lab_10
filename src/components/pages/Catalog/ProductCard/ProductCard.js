import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, description, price, tonnage, passengers, image, onShowMore }) => {
  return (
    <div className="product-card">
      <div className="product-card-header">{title}</div>
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <p>{description}</p>
      <div className="product-details">
        <div><strong>Tonnage: </strong> {tonnage} tons</div>
        <div><strong>Passengers: </strong> {passengers}</div>
      </div>
      <div className="product-price">
        <span>Price:</span>
        <span>${price}</span>
      </div>
      <button onClick = {onShowMore} className="view-more-catalog">View more</button>

    </div>
  );
};

export default ProductCard;
