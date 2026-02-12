import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return productsData;
    return productsData.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Our Products</h1>
        
        {/* Filters */}
        <div className="flex justify-center mb-12 space-x-4">
          <button 
            onClick={() => handleCategoryChange('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
          >
            All
          </button>
          {categoriesData.map(cat => (
            <button 
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${selectedCategory === cat.id ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary">{product.name}</h3>
                </div>
                <p className="text-sm text-accent font-semibold mb-3">{product.subcategory}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <button className="w-full bg-secondary text-white py-2 rounded hover:bg-primary transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
