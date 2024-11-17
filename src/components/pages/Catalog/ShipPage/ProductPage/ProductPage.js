import React from 'react';
import ProductInfo from '../ProductInfo/ProductInfo';
import ActionButtons from '../ActionButtons/ActionButtons';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <ProductInfo />
      <ActionButtons />
    </div>
  );
};

export default ProductPage;



