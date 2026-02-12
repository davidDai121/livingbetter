import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Elevating Lifestyles, <br />
            <span className="text-accent">For You and Your Pets</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connecting global homes with quality Chinese craftsmanship. We specialize in premium furniture and innovative pet supplies.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/products" className="bg-accent hover:bg-sky-600 text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center">
              View Products <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/contact" className="border border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-md font-semibold transition-colors">
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
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-gray-600">Expertise in international trade and logistics, ensuring seamless delivery worldwide.</p>
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
              <h3 className="text-xl font-bold mb-2">Reliable Supply Chain</h3>
              <p className="text-gray-600">Strong partnerships with top manufacturers to guarantee steady supply and competitive pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" 
                alt="Furniture" 
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <h3 className="text-white text-3xl font-bold mb-4">Home Furniture</h3>
                <Link to="/products?category=furniture" className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Explore Collection
                </Link>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80" 
                alt="Pet Supplies" 
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <h3 className="text-white text-3xl font-bold mb-4">Pet Supplies</h3>
                <Link to="/products?category=pets" className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Explore Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
