import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can install lucide-react or use any icons you like

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            TalentSync
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
            <Link to="/register" className="text-gray-600 hover:text-blue-600 transition">Register</Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600 transition">Login</Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition">Dashboard</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/register" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Register</Link>
          <Link to="/login" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Login</Link>
          <Link to="/dashboard" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
