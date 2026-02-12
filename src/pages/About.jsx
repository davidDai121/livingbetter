import { Truck, ShieldCheck, Heart, Globe, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80" 
            alt="Elegant Living Room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Redefining Home Living</h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
            Living Better is your premier partner for high-quality, modern furnishings. We bring exceptional style and comfort directly to your doorstep.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Story Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24 animate-fade-in-up">
           <div className="md:w-1/2">
             <div className="relative">
               <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full z-0"></div>
               <img 
                 src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80" 
                 alt="Modern Interior Detail" 
                 className="relative z-10 rounded-lg shadow-2xl w-full h-[500px] object-cover"
               />
             </div>
           </div>
           <div className="md:w-1/2">
             <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">Crafting Your Dream Home</h2>
             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
               At Living Better, we believe that a beautiful home shouldn't require a compromise on quality, style, or budget. Founded in Austin, Texas, our mission is to simplify the furniture buying process by offering a curated selection of premium pieces stocked locally in the US.
             </p>
             <p className="text-xl text-gray-600 mb-10 leading-relaxed">
               By managing our own supply chain and keeping inventory stateside, we ensure that you get the designs you love without the long wait times or uncertainty of international shipping. We are dedicated to bringing you pieces that inspire joy and comfort in your everyday life.
             </p>

             <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-accent shadow-sm">
               <h3 className="text-xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
               <ul className="space-y-3 text-gray-700 text-lg">
                 <li className="flex items-center"><Star size={20} className="text-accent mr-3" /> Design-Forward Thinking</li>
                 <li className="flex items-center"><Star size={20} className="text-accent mr-3" /> Uncompromising Quality</li>
                 <li className="flex items-center"><Star size={20} className="text-accent mr-3" /> Seamless Customer Experience</li>
               </ul>
             </div>
           </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">We are committed to excellence in every aspect of our business, from sourcing to delivery.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
                 <div className="w-14 h-14 bg-blue-100 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Fast US Shipping</h3>
                 <p className="text-gray-600">No overseas delays. Our products are shipped directly from our US warehouses to ensure rapid delivery.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
                 <div className="w-14 h-14 bg-blue-100 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guaranteed</h3>
                 <p className="text-gray-600">Every piece is rigorously inspected to meet our high standards for durability and craftsmanship.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
                 <div className="w-14 h-14 bg-blue-100 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
                 <p className="text-gray-600">We pride ourselves on responsive, local support. Your satisfaction is our top priority.</p>
              </div>
           </div>
        </div>

        {/* Stats / Trust */}
        <div className="bg-primary rounded-2xl p-12 text-white text-center">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                 <div className="text-4xl font-bold mb-2">5+</div>
                 <div className="text-gray-400">Years of Excellence</div>
              </div>
              <div>
                 <div className="text-4xl font-bold mb-2">100%</div>
                 <div className="text-gray-400">US-Based Stock</div>
              </div>
              <div>
                 <div className="text-4xl font-bold mb-2">24/7</div>
                 <div className="text-gray-400">Customer Support</div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;
