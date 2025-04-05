import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import LogoImg from '../../assets/Logo/LOGO.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={LogoImg} alt="Logo" className="h-12" />
          </Link>

          {/* Office Info */}
          <div className="hidden md:block">
            <div>
              <p className="text-lg font-bold text-blue-800">OFFICE ADDRESS:</p>
              <p className="text-xs text-gray-600">SCO 443-444, Second Floor, Sector 35-C, Chandigarh - 160022</p>
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="hidden md:flex space-x-8">
            <div>
              <p className="text-lg  text-blue-800">For Punjab</p>
              <p className="text-lg font-bold text-ess-blue-900">1234567</p>
            </div>
            <div>
              <p className="text-lg  text-blue-800">Rest of India</p>
              <p className="text-lg font-bold text-ess-blue-900">234342342</p>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-ess-blue-900 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Nav Links */}
<div className="hidden md:flex justify-center space-x-4 text-black text-sm font-medium tracking-wide">
  {[
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/australia', label: 'Australia' },
    { to: '/canada', label: 'Canada' },
    { to: '/united-kingdom', label: 'United Kingdom' },
    { to: '/usa', label: 'USA' },
    { to: '/scholarships', label: 'Scholarships' },
    { to: '/media', label: 'Media Coverage' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/other', label: 'Others' },
  ].map((item) => (
    <Link
      key={item.to}
      to={item.to}
      className="px-4 py-2 border border-transparent rounded-md hover:border-blue-600 hover:text-white hover:bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300"
    >
      {item.label}
    </Link>
  ))}
</div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md z-50">
          <ul className="flex flex-col divide-y divide-ess-blue-800">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/australia', label: 'Australia' },
              { to: '/canada', label: 'Canada' },
              { to: '/united-kingdom', label: 'United Kingdom' },
              { to: '/usa', label: 'USA' },
              { to: '/scholarships', label: 'Scholarships' },
              { to: '/media', label: 'Media Coverage' },
              { to: '/contact', label: 'Contact Us' },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block px-4 py-3 text-gray-700 hover:bg-ess-blue-800 hover:text-white transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Others Dropdown */}
            <li>
              <div className="block px-4 py-3 text-gray-700 bg-gray-50 font-semibold">Others</div>
              <ul className="ml-4">
                <li>
                  <Link
                    to="/france"
                    className="block px-4 py-2 text-gray-600 hover:text-ess-blue-900 transition"
                  >
                    France
                  </Link>
                </li>
                <li>
                  <Link
                    to="/germany"
                    className="block px-4 py-2 text-gray-600 hover:text-ess-blue-900 transition"
                  >
                    Germany
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
