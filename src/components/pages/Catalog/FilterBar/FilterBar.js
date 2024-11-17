import React, { useState } from 'react';
import "./FilterBar.css"

const FilterBar = ({ onApply }) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedTonnage, setSelectedTonnage] = useState('');
  const [selectedPassengers, setSelectedPassengers] = useState('');

  const handleApply = () => {
    onApply({
      price: selectedPrice,
      tonnage: selectedTonnage,
      passengers: selectedPassengers,
    });
  };

  return (
    <div className="filter-bar">
      <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
        <option value="">Price Range</option>
        <option value="low">Low (0 - 100,000)</option>
        <option value="medium">Medium (100,000 - 1,000,000)</option>
        <option value="high">High (1,000,000+)</option>
      </select>
      <select value={selectedTonnage} onChange={(e) => setSelectedTonnage(e.target.value)}>
        <option value="">Tonnage Range</option>
        <option value="small">Small (0 - 500 tons)</option>
        <option value="medium">Medium (500 - 10,000 tons)</option>
        <option value="large">Large (10,000+ tons)</option>
      </select>
      <select value={selectedPassengers} onChange={(e) => setSelectedPassengers(e.target.value)}>
        <option value="">Passengers Capacity</option>
        <option value="few">Few (0 - 10)</option>
        <option value="medium">Medium (10 - 100)</option>
        <option value="many">Many (100+)</option>
      </select>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default FilterBar;
