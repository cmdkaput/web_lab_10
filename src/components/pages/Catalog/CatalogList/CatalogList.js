import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { useSearch } from '../SearchContext/SearchContext';
import './CatalogList.css';
import FilterBar from '../FilterBar/FilterBar';
import Loader from '../../../Loader/Loader'; // Імпортуємо лоадер
import axios from 'axios';

const CatalogList = () => {
  const { searchTerm } = useSearch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    price: '',
    tonnage: '',
    passengers: '',
  });
  const [isLoading, setIsLoading] = useState(false); // Стан для лоадера

  const fetchProducts = async () => {
    setIsLoading(true); // Показуємо лоадер перед фетчем
    try {
      const response = await axios.get('http://localhost:5000/api/ships', {
        params: {
          search: searchTerm.trim(),
          price: filters.price,
          tonnage: filters.tonnage,
          passengers: filters.passengers,
        },
      });
      setProducts(response.data); // Оновлюємо список продуктів
    } catch (error) {
      console.error('Error fetching data from server:', error);
    } finally {
      setIsLoading(false); // Приховуємо лоадер після завершення фетчу
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, filters]); // Виклик фетчу при зміні пошуку чи фільтрів

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters); // Оновлення фільтрів
  };

  return (
    <div>
      <FilterBar onApply={handleApplyFilters} />
      {isLoading ? ( // Умова для відображення лоадера
        <Loader />
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              title={product.name} 
              description={product.description} 
              price={product.price} 
              tonnage={product.tonnage} 
              passengers={product.passengers} 
              image={product.imageUrl} 
              onShowMore={() => navigate("/catalog/shipPage", { state: { product } })}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CatalogList;
