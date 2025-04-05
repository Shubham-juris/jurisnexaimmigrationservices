import React from "react";
import Img from "../assets/HeroImg/Background.png";

const ContactUsPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero section */}
      <div
        className="w-full h-64 md:h-96 bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <div className="absolute inset-0"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
          Contact Us
        </h1>
      </div>

      {/* Our Offices Section */}
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <p className="text-sm text-blue-600 uppercase mb-2">Locations</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Offices
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["India", "Australia", "Canada"].map((country, index) => (
            <div
              key={index}
              className="relative h-64 sm:h-72 md:h-80 bg-cover bg-center rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
              style={{ backgroundImage: `url(${Img})` }}
            >
              <div className="absolute inset-0  flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">{country}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
