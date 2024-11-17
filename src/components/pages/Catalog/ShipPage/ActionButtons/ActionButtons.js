import React from 'react';
import './ActionButtons.css';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../SearchContext/SearchContext';

const ActionButtons = () => {

  const navigate = useNavigate();
  const { setSearchTerm } = useSearch();

  const handleGoBack = () => {
    setSearchTerm("");
    navigate('/catalog');
  };

  return (
    <div className="action-buttons">
      <button onClick={handleGoBack} className="go-back">Go back</button>
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
};

export default ActionButtons;
