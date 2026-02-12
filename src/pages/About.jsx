const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Living Better Trade LLC is your premier partner for high-quality Chinese home furnishings and pet supplies.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To bridge the gap between exceptional Chinese manufacturing and the global market. We believe that everyone deserves a comfortable home and that our pets deserve the best care possible.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By leveraging our deep roots in the supply chain and commitment to quality, we deliver products that elevate everyday living at competitive prices.
              </p>
            </div>
            <div className="h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-4">Design Excellence</h3>
            <p className="text-gray-600">
              We curate products that blend modern aesthetics with functionality, ensuring they fit perfectly into contemporary homes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-4">Sustainable Sourcing</h3>
            <p className="text-gray-600">
              We are committed to working with manufacturers who prioritize environmentally friendly practices and materials.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-4">Customer Focus</h3>
            <p className="text-gray-600">
              Our clients are at the heart of everything we do. We strive to exceed expectations in service, delivery, and product quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
