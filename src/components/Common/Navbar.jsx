import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import LogoImg from "../../assets/Logo/LOGO.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex items-center">
            <a href="mailto:info@essglobal.com" className="flex items-center text-gray-700">
              <FiMail className="mr-2" />
              Jurisnexa.com
            </a>
            <span className="mx-4 hidden text-gray-500 md:block">|</span>
            <p className="hidden text-gray-700 md:block">Mon-Sat - 9.30AM to 5.30PM</p>
          </div>
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/" className="text-gray-700 hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" className="text-gray-700 hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="https://in.linkedin.com/" className="text-gray-700 hover:text-blue-700">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/" className="text-gray-700 hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/" className="text-gray-700 hover:text-red-600">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={LogoImg} alt="Logo" className= "h-12" />
          </Link>

          {/* Corporate Office */}
          <div className="hidden md:block">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-bold text-ess-blue-900">OFFICE ADDRESS:</p>
                <p className="text-xs text-gray-600">SCO 443-444, Second Floor, Sector 35-C, Chandigarh - 160022</p>
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <div>
                <p className="text-xs text-gray-600">For Punjab</p>
                <p className="text-lg font-bold text-ess-blue-900">1234567</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Rest of India</p>
                <p className="text-lg font-bold text-ess-blue-900">234342342</p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Desktop Menu Items */}
      <div className="hidden md:flex space-x-4 bg-ess-blue-900 text-black">
        <Link to="/" className="block px-4 py-3 hover:bg-ess-blue-800">Home</Link>
        <Link to="/about" className="block px-4 py-3 hover:bg-ess-blue-800">About</Link>
        <Link to="/australia" className="block px-4 py-3 hover:bg-ess-blue-800">Australia</Link>
        <Link to="/canada" className="block px-4 py-3 hover:bg-ess-blue-800">Canada</Link>
        <Link to="/united-kingdom" className="block px-4 py-3 hover:bg-ess-blue-800">United Kingdom</Link>
        <Link to="/usa" className="block px-4 py-3 hover:bg-ess-blue-800">USA</Link>
        <Link to="/scholarships" className="block px-4 py-3 hover:bg-ess-blue-800">Scholarships</Link>
        <Link to="/media" className="block px-4 py-3 hover:bg-ess-blue-800">Media Coverage</Link>
        <Link to="/contact" className="block px-4 py-3 hover:bg-ess-blue-800">Contact Us</Link>
        <div className="group relative">
          <Link to="#" className="block px-4 py-3 hover:bg-ess-blue-800">Others</Link>
          <ul className="absolute left-0 hidden w-56 bg-white text-gray-800 shadow-lg group-hover:block">
            <li>
              <Link to="/france" className="block px-4 py-2 hover:bg-gray-100">France</Link>
            </li>
            <li>
              <Link to="/germany" className="block px-4 py-2 hover:bg-gray-100">Germany</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col border-t border-ess-blue-800">
            <li>
              <Link to="/" className="block border-b border-ess-blue-800 px-4 py-3 hover:bg-ess-blue-800">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block border-b border-ess-blue-800 px-4 py-3 hover:bg-ess-blue-800">About</Link>
            </li>
            <li>
              <Link to="/australia" className="block border-b border-ess-blue-800 px-4 py-3 hover:bg-ess-blue-800">Australia</Link>
            </li>
            <li>
              <Link to="/canada" className="block border-b border-ess-blue-800 px-4 py-3 hover:bg-ess-blue-800">Canada</Link>
            </li>
            <li>
              <Link to="/united-kingdom" className="block border-b border-ess-blue-800 px-4 py-3 hover:bg-ess-blue-800">United Kingdom</Link>
            </li>
            <li>
              <Link to="/usa" className="block border-b border-ess-blue-800 px-4 py-3 hover:bg-ess-blue-800">USA</Link>
            </li>
            <li className="group relative">
              <Link to="#" className="block border-b border-ess-blue-800 px-4 py-3 hover:bg-ess-blue-800">Others</Link>
              <ul className="flex flex-col border-t border-ess-blue-800">
                <li>
                  <Link to="/france" className="block border-b border-ess-blue-800 px-4 py-3 hover:bg-ess-blue-800">France</Link>
                </li>
                <li>
                  <Link to="/germany" className="block border-b border-ess-blue-800 px-4 py-3 hover:bg-ess-blue-800">Germany</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/scholarships" className="block border-b border-ess-blue-800 px-4 py-3 hover:bg-ess-blue-800">Scholarships</Link>
            </li>
            <li>
              <Link to="/media" className="block border-b border-ess-blue-800 px-4 py-3 hover:bg-ess-blue-800">Media Coverage</Link>
            </li>
            <li>
              <Link to="/contact" className="block px-4 py-3 hover:bg-ess-blue-800">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;