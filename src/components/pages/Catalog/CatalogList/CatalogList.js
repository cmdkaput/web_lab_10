import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './CatalogList.css';

const products = [
  {id: 1, title: 'Luxury Yacht', description: 'A luxury yacht with modern amenities.', price: 1500000, tonnage: 500, passengers: 10, image: '../img/luxury_yacht.jpg' },
  { id: 2, title: 'Fishing Vessel', description: 'A sturdy vessel designed for deep-sea fishing.', price: 75000, tonnage: 50, passengers: 6, image: '../img/fishing_vessel.jpg' },
  { id: 3, title: 'Cargo Ship', description: 'Large cargo ship for transporting goods globally.', price: 5000000, tonnage: 20000, passengers: 20, image: './img/cargo_ship.jpg' },
  { id: 4, title: 'Speedboat', description: 'Fast and nimble, perfect for quick trips.', price: 25000, tonnage: 2, passengers: 4, image: './img/speed_boat.jpg' },
  { id: 5, title: 'Sailing Ship', description: 'A classic sailing ship with beautiful design.', price: 120000, tonnage: 100, passengers: 15, image: './img/sailing_ship.jpg' },
  { id: 6, title: 'Cruise Ship', description: 'A massive cruise ship for oceanic voyages.', price: 7000000, tonnage: 30000, passengers: 3000, image: './img/cruise_ship.jpg' },
  { id: 7, title: 'Patrol Boat', description: 'A patrol boat used for coastal surveillance.', price: 90000, tonnage: 30, passengers: 12, image: './img/patrol_boat.jpg' },
  { id: 8, title: 'Research Vessel', description: 'A ship equipped for scientific research.', price: 200000, tonnage: 100, passengers: 30, image: './img/research_boat.jpg' },
  { id: 9, title: 'Tugboat', description: 'A powerful tugboat for maneuvering large vessels.', price: 85000, tonnage: 25, passengers: 5, image: './img/tugboat.jpg' },
  { id: 10, title: 'Submarine', description: 'A small submarine for underwater exploration.', price: 500000, tonnage: 50, passengers: 8, image: './img/submarine.jpg' },
];

const CatalogList = () => {
  return (
      <div className="product-list">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            title={product.title} 
            description={product.description} 
            price={product.price} 
            tonnage={product.tonnage} 
            passengers={product.passengers} 
            image={product.image} 
          />
        ))}
      </div>
  );
};

export default CatalogList;
