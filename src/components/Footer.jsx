import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Living Better</h3>
            <p className="text-gray-400">
              Premium furniture for modern living.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: livingbettertrade@gmail.com</p>
            <p className="text-gray-400">Addr: 5705 Diehl Trl, Apt 10101, Austin, Texas 78727</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Living Better Trade LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
