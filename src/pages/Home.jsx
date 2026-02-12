import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, Globe } from 'lucide-react';
import categoriesData from '../data/categories.json';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80" 
            alt="Modern Living Room" 
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Elevating Lifestyles, <br />
            <span className="text-accent">One Room at a Time</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Premium furniture for every space in your home. US-based inventory, ready to ship directly to your door.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/products" className="bg-accent hover:bg-sky-600 text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center">
              View Collections <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/contact" className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-accent">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">US-Based Stock</h3>
              <p className="text-gray-600">All products are stocked in our US warehouses for immediate availability.</p>
            </div>
            <div className="p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-accent">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous quality control processes to meet international standards for every product.</p>
            </div>
            <div className="p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-accent">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick processing and delivery to ensure your furniture arrives when you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesData.map(category => (
              <div key={category.id} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                  <h3 className="text-white text-3xl font-bold mb-4">{category.name}</h3>
                  <Link to={`/products?category=${category.id}`} className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <Link to="/products" className="text-accent font-semibold hover:text-sky-700 flex items-center justify-center">
               View All Collections <ArrowRight className="ml-2" size={20} />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
