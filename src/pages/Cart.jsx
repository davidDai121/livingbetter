import { Link } from 'react-router-dom';
import { Trash2, MessageCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = "Hi, I am interested in getting a quote for the following items:\n\n";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n   Color: ${item.color}\n   Price: ${item.price}\n\n`;
    });

    message += "Please provide availability and shipping details.";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/15129092504?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Quote Cart is Empty</h2>
        <p className="text-gray-600 mb-8">Browse our collections and add items to request a quote.</p>
        <Link to="/products" className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-600 transition-colors">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Quote Request</h1>
        
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={`${item.id}-${item.variantId}`} className="p-6 flex flex-col sm:flex-row items-center">
                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden mb-4 sm:mb-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 sm:ml-6 flex flex-col justify-center text-center sm:text-left w-full">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Color: {item.color}</p>
                  <p className="text-sm font-semibold text-accent mt-2">{item.price}</p>
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-6">
                  <button 
                    onClick={() => removeFromCart(item.id, item.variantId)}
                    className="text-red-500 hover:text-red-700 p-2 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/products" className="text-gray-600 hover:text-accent flex items-center">
            <ArrowLeft className="mr-2" size={18} /> Continue Browsing
          </Link>
          
          <button 
            onClick={handleWhatsAppCheckout}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-md transition-transform active:scale-[0.98] flex items-center"
          >
            <MessageCircle className="mr-2" size={20} /> Request Quote on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
