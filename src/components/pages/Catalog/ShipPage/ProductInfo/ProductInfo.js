import React from 'react';
import './ProductInfo.css';
import { useLocation} from 'react-router-dom';

const ProductInfo = () => {
    const location = useLocation();
    const ship = location.state?.product;
    if (!ship) {
        return <p>No ship data available</p>;
    }
    

  return (
    <div className="product-info-card">
        <div className="image-preview">
            <img src={ship.image} alt="Product" />
        </div>
        <div className="product-details">
            <h2>{ship.title}</h2>
            <p>{ship.description}</p>
            <div className="input-fields">
            <div className="input-field">
                <label>Countable Field</label>
                <input type="text" placeholder="1337..." />
            </div>
            <div className="input-field">
                <label>Selectable Field</label>
                <select>
                <option>Select</option>
                </select>
            </div>
            </div>
            <div className="price">Price: {ship.price}</div>
        </div>
    </div>
  );
};

export default ProductInfo;
