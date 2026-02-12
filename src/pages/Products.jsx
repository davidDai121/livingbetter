import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

const ITEMS_PER_PAGE = 12;

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [currentPage, setCurrentPage] = useState(1);

  // Sync state with URL params
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
    setCurrentPage(1); // Reset to page 1 when category changes
  }, [categoryParam]);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return productsData;
    return productsData.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Our Furniture Collections</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
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
          {currentProducts.map(group => {
            // Use the first variant as the "face" of the group
            const mainVariant = group.variants && group.variants.length > 0 ? group.variants[0] : group;
            const variantCount = group.variants ? group.variants.length : 0;
            
            return (
              <div key={group.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="h-64 overflow-hidden relative group">
                  <img 
                    src={mainVariant.image} 
                    alt={group.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {variantCount > 1 && (
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      {variantCount} Colors
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary line-clamp-2">{group.name}</h3>
                  </div>
                  <p className="text-sm text-accent font-semibold mb-3 capitalize">{group.category.replace('-', ' ')}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                    {group.description.split('\n')[0].substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-gray-900">{mainVariant.price}</span>
                    <Link 
                      to={`/products/${group.id}`}
                      className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary transition-colors text-sm"
                    >
                      View Options
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No products found in this category.
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border ${currentPage === 1 ? 'text-gray-300 border-gray-200 cursor-not-allowed' : 'text-gray-600 border-gray-300 hover:bg-gray-100'}`}
            >
              <ChevronLeft size={20} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full border ${currentPage === totalPages ? 'text-gray-300 border-gray-200 cursor-not-allowed' : 'text-gray-600 border-gray-300 hover:bg-gray-100'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
