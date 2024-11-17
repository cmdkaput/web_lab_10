
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { useSearch } from '../SearchContext/SearchContext';
import './CatalogList.css';
import FilterBar from '../FilterBar/FilterBar';

const CatalogList = () => {
  const products = [
    {id: 1, title: 'Luxury Yacht', description: 'A luxury yacht with modern amenities.', price: 1500000, tonnage: 500, passengers: 10, image: '../img/luxury_yacht.jpg' },
    { id: 2, title: 'Fishing Vessel', description: 'A sturdy vessel designed for deep-sea fishing.', price: 75000, tonnage: 50, passengers: 6, image: '../img/fishing_vessel.jpg' },
    { id: 3, title: 'Cargo Ship', description: 'Large cargo ship for transporting goods globally.', price: 5000000, tonnage: 20000, passengers: 20, image: '../img/cargo_ship.jpg' },
    { id: 4, title: 'Speedboat', description: 'Fast and nimble, perfect for quick trips.', price: 25000, tonnage: 2, passengers: 4, image: '../img/speed_boat.jpg' },
    { id: 5, title: 'Sailing Ship', description: 'A classic sailing ship with beautiful design.', price: 120000, tonnage: 100, passengers: 15, image: '../img/sailing_ship.jpg' },
    { id: 6, title: 'Cruise Ship', description: 'A massive cruise ship for oceanic voyages.', price: 7000000, tonnage: 30000, passengers: 3000, image: '../img/cruise_ship.jpg' },
    { id: 7, title: 'Patrol Boat', description: 'A patrol boat used for coastal surveillance.', price: 90000, tonnage: 30, passengers: 12, image: '../img/patrol_boat.jpg' },
    { id: 8, title: 'Research Vessel', description: 'A ship equipped for scientific research.', price: 200000, tonnage: 100, passengers: 30, image: '../img/research_boat.jpg' },
    { id: 9, title: 'Tugboat', description: 'A powerful tugboat for maneuvering large vessels.', price: 85000, tonnage: 25, passengers: 5, image: '../img/tugboat.jpg' },
    { id: 10, title: 'Submarine', description: 'A small submarine for underwater exploration.', price: 500000, tonnage: 50, passengers: 8, image: '../img/submarine.jpg' },
  ];

  const { searchTerm } = useSearch();
  const navigate = useNavigate();
  const trimmedSearchTerm = searchTerm.trim().toLowerCase();

  const [filters, setFilters] = useState({
    price: '',
    tonnage: '',
    passengers: '',
  });

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(trimmedSearchTerm);
    
    const matchesPrice = 
      (filters.price === 'low' && product.price <= 100000) ||
      (filters.price === 'medium' && product.price > 100000 && product.price <= 1000000) ||
      (filters.price === 'high' && product.price > 1000000) ||
      filters.price === '';
    
    const matchesTonnage = 
      (filters.tonnage === 'small' && product.tonnage <= 500) ||
      (filters.tonnage === 'medium' && product.tonnage > 500 && product.tonnage <= 10000) ||
      (filters.tonnage === 'large' && product.tonnage > 10000) ||
      filters.tonnage === '';

    const matchesPassengers = 
      (filters.passengers === 'few' && product.passengers <= 10) ||
      (filters.passengers === 'medium' && product.passengers > 10 && product.passengers <= 100) ||
      (filters.passengers === 'many' && product.passengers > 100) ||
      filters.passengers === '';

    return matchesSearch && matchesPrice && matchesTonnage && matchesPassengers;
  });

  return (
    <div>
      <FilterBar onApply={handleApplyFilters} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            title={product.title} 
            description={product.description} 
            price={product.price} 
            tonnage={product.tonnage} 
            passengers={product.passengers} 
            image={product.image} 
            onShowMore={() => navigate("/catalog/shipPage", { state: { product } })}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogList;
