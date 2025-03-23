// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // change to false if testing logged-out state

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">TalentSync</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>

            {isLoggedIn && (
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
            )}

            {!isLoggedIn && (
              <>
                <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              </>
            )}

            {isLoggedIn && (
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="avatar"
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={() => setDropdown(!dropdown)}
                />
                {dropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded z-10">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                      onClick={() => setIsLoggedIn(false)}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700">Home</Link>

          {isLoggedIn && (
            <Link to="/dashboard" onClick={toggleMenu} className="block text-gray-700">Dashboard</Link>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/register" onClick={toggleMenu} className="block text-gray-700">Register</Link>
              <Link to="/login" onClick={toggleMenu} className="block text-gray-700">Login</Link>
            </>
          )}

          {isLoggedIn && (
            <>
              <Link to="/profile" onClick={toggleMenu} className="block text-gray-700">Profile</Link>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setOpen(false);
                }}
                className="block w-full text-left text-red-500"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
