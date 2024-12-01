import React, { useState } from 'react';
import "./FilterBar.css";

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
        <option value="100000">Low (0 - 100,000)</option>
        <option value="1000000">Medium (100,000 - 1,000,000)</option>
        <option value="1000000+">High (1,000,000+)</option>
      </select>
      <select value={selectedTonnage} onChange={(e) => setSelectedTonnage(e.target.value)}>
        <option value="">Tonnage Range</option>
        <option value="500">Small (0 - 500 tons)</option>
        <option value="10000">Medium (500 - 10,000 tons)</option>
        <option value="10000+">Large (10,000+ tons)</option>
      </select>
      <select value={selectedPassengers} onChange={(e) => setSelectedPassengers(e.target.value)}>
        <option value="">Passengers Capacity</option>
        <option value="10">Few (0 - 10)</option>
        <option value="100">Medium (10 - 100)</option>
        <option value="100+">Many (100+)</option>
      </select>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default FilterBar;
