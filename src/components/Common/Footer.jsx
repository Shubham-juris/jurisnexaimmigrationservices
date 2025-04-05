import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import Img from "../../assets/Logo/LOGO.jpg"; 
const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-4">
          {/* Column 1: Logo and About */}
          <div>
            <Link to="/">
              <img
                src={Img}
                alt="Logo"
                className="mb-4 h-16"
              />
            </Link> 
            <p className="mb-4 text-sm text-gray-400">
              JurisNexa Immegration, the benchmark in overseas education and immigration, has been leading the way since 2013
            </p>
            <h4 className="mb-3 text-sm font-bold uppercase">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-sm hover:bg-blue-600 hover:border-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-sm hover:bg-pink-600 hover:border-pink-600"
              >
                <FaInstagram />
              </a>
              <a
                href="https://in.linkedin.com"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-sm hover:bg-blue-700 hover:border-blue-700"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com/"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-sm hover:bg-blue-400 hover:border-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-sm hover:bg-red-600 hover:border-red-600"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Study */}
<div>
  <h4 className="mb-4 text-lg font-semibold">Study</h4>
  <ul className="space-y-2 text-sm text-gray-400">
    <li className="hover:text-ess-blue-300">Australia</li>
    <li className="hover:text-ess-blue-300">Canada</li>
    <li className="hover:text-ess-blue-300">USA</li>
    <li className="hover:text-ess-blue-300">UK</li>
  </ul>
</div>

{/* Column 3: Useful Links */}
<div>
  <h4 className="mb-4 text-lg font-semibold">Useful Links</h4>
  <ul className="space-y-2 text-sm text-gray-400">
    <li className="hover:text-ess-blue-300">Cyprus</li>
    <li className="hover:text-ess-blue-300">Cyprus EU</li>
    <li className="hover:text-ess-blue-300">Greece</li>
    <li className="hover:text-ess-blue-300">Current Openings</li>
  </ul>
</div>


          {/* Column 4: Venture by OPTAS */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={Img}
              alt="logo"
              className="max-w-[150px]"
            />
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-ess-blue-900 py-3 text-center text-sm text-white">
        <div className="container mx-auto px-4">
          © 2025 JurisNexa Immegration Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
