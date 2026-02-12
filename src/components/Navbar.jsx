import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary font-bold text-xl">
              <ShoppingBag className="mr-2" />
              Living Better
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary hover:text-accent transition-colors">Home</Link>
            <Link to="/about" className="text-secondary hover:text-accent transition-colors">About Us</Link>
            <Link to="/products" className="text-secondary hover:text-accent transition-colors">Products</Link>
            <Link to="/contact" className="text-secondary hover:text-accent transition-colors">Contact</Link>
            
            {/* Cart Icon */}
            <Link to="/cart" className="relative text-secondary hover:text-accent transition-colors">
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
          <div className="md:hidden flex items-center space-x-4">
             {/* Mobile Cart Icon */}
             <Link to="/cart" className="relative text-secondary hover:text-accent transition-colors">
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary hover:text-accent">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-secondary hover:text-accent" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block px-3 py-2 text-secondary hover:text-accent" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/products" className="block px-3 py-2 text-secondary hover:text-accent" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/contact" className="block px-3 py-2 text-secondary hover:text-accent" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/cart" className="block px-3 py-2 text-secondary hover:text-accent font-semibold" onClick={() => setIsOpen(false)}>Cart ({cart.length})</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
