import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// lucide-react is library for icons
import { Menu,  X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set according to auth
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);

  // Click outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdown(false);
    navigate('/');
  };

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
              <div className="relative" ref={dropdownRef}>
                <img
                  src="https://i.pravatar.cc/40"
                  alt="avatar"
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={() => setDropdown(!dropdown)}
                />
                <div
                  className={`absolute right-0 mt-2 w-40 bg-white shadow rounded z-10 transition-all duration-200 ${
                    dropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  <Link
                    to="/profile"
                    onClick={() => setDropdown(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
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
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-sm">
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
                  setOpen(false);
                  handleLogout();
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
