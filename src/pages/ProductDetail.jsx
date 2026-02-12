import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Truck, ShieldCheck, Mail, ZoomIn, ChevronDown, ChevronUp, ShoppingCart } from 'lucide-react';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';

// Helper to clean up description text
const cleanDescription = (text) => {
  if (!text) return "";
  return text
    // Remove common scraper headers
    .replace(/^Specifications\s+Product Name\s+.*?\n/is, '')
    .replace(/Color\s+.*?\n/i, '')
    // Remove redundant "Description" title
    .replace(/^\s*Description\s*$/gim, '')
    // Collapse multiple empty lines (3+ newlines -> 2 newlines)
    .replace(/(\n\s*){3,}/g, '\n\n')
    .trim();
};

// Collapsible Section Component
const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold text-gray-900 hover:text-accent transition-colors"
      >
        {title}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 text-sm leading-relaxed animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  
  // Find the group that contains this ID (either as group ID or variant ID)
  const productGroup = productsData.find(g => g.id === id || g.variants.some(v => v.id === id));
  
  // Initialize state
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  // Set initial variant on load
  useEffect(() => {
    if (productGroup) {
      const initialVariant = productGroup.variants.find(v => v.id === id) || productGroup.variants[0];
      setSelectedVariant(initialVariant);
      setSelectedImage(null); // Reset image selection to default of new variant
    }
  }, [id, productGroup]);

  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(productGroup, selectedVariant);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${productGroup.name}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/15129092504?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!productGroup || !selectedVariant) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <Link to="/products" className="text-accent hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} /> Back to Products
        </Link>
      </div>
    );
  }

  const currentImage = selectedImage || selectedVariant.image;

  // Zoom handler
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;
    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Breadcrumb / Back Navigation */}
      <div className="bg-gray-100 py-4 border-b border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/products" className="text-sm text-gray-600 hover:text-accent flex items-center">
              <ArrowLeft className="mr-1" size={16} /> Back to Results
            </Link>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
             
             {/* Main Image Area with Zoom */}
             <div className="relative bg-gray-50 border border-gray-200 rounded-lg overflow-hidden h-[400px] lg:h-[600px] flex items-center justify-center cursor-crosshair group w-full"
                  ref={imageContainerRef}
                  onMouseEnter={() => setIsZoomed(true)}
                  onMouseLeave={() => setIsZoomed(false)}
                  onMouseMove={handleMouseMove}
             >
                <img 
                  src={currentImage} 
                  alt={productGroup.name} 
                  className={`max-w-full max-h-full object-contain transition-opacity duration-200 ${isZoomed ? 'opacity-0' : 'opacity-100'}`} 
                />
                
                {/* Zoomed Image Layer */}
                {isZoomed && (
                  <div 
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                      backgroundImage: `url(${currentImage})`,
                      backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      backgroundSize: '200%',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                )}
                
                <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full text-gray-600 lg:hidden">
                  <ZoomIn size={20} />
                </div>
             </div>

             {/* Thumbnail Strip */}
             <div className="flex flex-row flex-wrap gap-3 mt-4">
                {/* Main Image Thumbnail */}
                <button 
                   onClick={() => setSelectedImage(selectedVariant.image)}
                   className={`w-16 h-16 lg:w-20 lg:h-20 border-2 rounded-md overflow-hidden transition-all ${currentImage === selectedVariant.image ? 'border-accent ring-2 ring-accent ring-opacity-50' : 'border-gray-200 hover:border-gray-400'}`}
                >
                   <img src={selectedVariant.image} alt="Main view" className="w-full h-full object-cover" />
                </button>
                {/* Gallery Thumbnails */}
                {selectedVariant.gallery && selectedVariant.gallery.map((img, index) => (
                   <button 
                     key={index} 
                     onClick={() => setSelectedImage(img)}
                     className={`w-16 h-16 lg:w-20 lg:h-20 border-2 rounded-md overflow-hidden transition-all ${currentImage === img ? 'border-accent ring-2 ring-accent ring-opacity-50' : 'border-gray-200 hover:border-gray-400'}`}
                   >
                     <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                   </button>
                ))}
             </div>
          </div>

          {/* RIGHT COLUMN: Product Info */}
          <div className="lg:col-span-5">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">{productGroup.name}</h1>
            <div className="text-sm text-gray-500 uppercase tracking-wider mb-6">
              {productGroup.category.replace('-', ' ')} Collection
            </div>
            
            <div className="mb-8">
              <p className="text-3xl font-bold text-accent">{selectedVariant.price}</p>
            </div>

            {/* Variant Selectors */}
            {productGroup.variants.length > 1 && (
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Available Colors</h3>
                <div className="flex flex-wrap gap-3">
                  {productGroup.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => {
                        setSelectedVariant(variant);
                        setSelectedImage(null);
                      }}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        selectedVariant.id === variant.id
                          ? 'border-accent bg-accent text-white shadow-md'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                      }`}
                    >
                      {variant.color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8 relative">
               {/* Notification */}
               {showNotification && (
                 <div className="absolute top-0 left-0 right-0 -mt-12 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center animate-fadeIn">
                    <Check size={18} className="mr-2" /> Added to Quote Cart!
                 </div>
               )}

               <div className="space-y-4">
                  <div className="flex items-center text-green-700 font-medium text-sm">
                    <Check size={16} className="mr-1" /> In Stock & Ready to Ship
                  </div>
                  <button 
                    onClick={handleAddToCart}
                    className="w-full bg-accent hover:bg-sky-600 text-white py-3.5 rounded-full font-bold shadow-sm transition-transform active:scale-[0.98] flex items-center justify-center"
                  >
                    <ShoppingCart className="mr-2" size={20} /> Add to Quote Cart
                  </button>
                  <Link to="/contact" className="w-full block text-center bg-gray-100 hover:bg-gray-200 text-gray-900 py-3.5 rounded-full font-semibold transition-colors">
                     Contact for Wholesale
                  </Link>
               </div>
               
               <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Truck size={14} className="mr-2 text-gray-400" />
                    <span>Fast Global Shipping</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck size={14} className="mr-2 text-gray-400" />
                    <span>Quality Verified</span>
                  </div>
               </div>
            </div>

            {/* Collapsible Details */}
            <div className="space-y-1">
              <CollapsibleSection title="Description" defaultOpen={true}>
                <div className="whitespace-pre-line text-gray-600">
                  {cleanDescription(productGroup.description)}
                </div>
              </CollapsibleSection>
              
              <CollapsibleSection title="Product Specifications">
                 <div className="grid grid-cols-2 gap-y-4 text-sm">
                    <div>
                      <span className="block text-gray-500">Dimensions</span>
                      <span className="font-medium text-gray-900">{productGroup.dimensions}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500">Material</span>
                      <span className="font-medium text-gray-900">{productGroup.material}</span>
                    </div>
                 </div>
              </CollapsibleSection>

              <CollapsibleSection title="Key Features">
                <ul className="space-y-2">
                  {productGroup.features && productGroup.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CollapsibleSection>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
