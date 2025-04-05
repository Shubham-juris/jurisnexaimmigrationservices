import React from "react";
import BgImg from "../assets/HeroImg/Background.png";
import MapAustralia from "../assets/HeroImg/map.png";
import MapFrance from "../assets/HeroImg/Background.png";
import MapGermany from "../assets/HeroImg/Background.png";
import MapIndia from "../assets/HeroImg/Background.png";
import MapIreland from "../assets/HeroImg/Background.png";
import MapItaly from "../assets/HeroImg/Background.png";
import MapJapan from "../assets/HeroImg/Background.png";
import MapKorea from "../assets/HeroImg/Background.png";
import MapSingapore from "../assets/HeroImg/Background.png";

const countries = [
  {
    name: "Australia",
    map: MapAustralia,
    description: "Australia has top cities like Sydney, Melbourne, Brisbane & more.",
    benefits: [
      "🎓 World-class education at prestigious universities.",
      "📈 High global university rankings.",
      "💰 Affordable tuition compared to UK/US.",
      "🎁 $200M AUD in scholarships for international students.",
      "🏫 7 out of top 100 universities.",
      "🧑‍💻 Internships and job-ready training programs.",
    ],
  },
  {
    name: "Germany",
    map: MapGermany,
    description: "Germany offers tuition-free education and top-notch technical universities.",
    benefits: [
      "🎓 Tuition-free or low-cost education.",
      "🏫 Strong engineering & tech programs.",
      "💼 Part-time work options for students.",
      "🎁 DAAD & other scholarship programs.",
      "🌍 Vibrant student cities like Berlin & Munich.",
    ],
  },
  {
    name: "India",
    map: MapIndia,
    description: "India has a diverse culture and strong education system across major cities.",
    benefits: [
      "🎓 Home to IITs, IIMs and other top institutions.",
      "💰 Affordable education and living costs.",
      "🌏 Global exposure with English instruction.",
      "💼 Internship and job opportunities in IT & Management.",
      "🎁 Government & private scholarships available.",
    ],
  },
  {
    name: "Ireland",
    map: MapIreland,
    description: "Ireland is known for its welcoming culture and top universities.",
    benefits: [
      "🎓 Leading in IT, pharma & finance education.",
      "📚 English-speaking country.",
      "💼 2-year post-study work visa.",
      "🎁 Government-funded scholarships.",
      "🏫 Campuses in cities like Dublin & Cork.",
    ],
  },
  {
    name: "Italy",
    map: MapItaly,
    description: "Italy combines rich heritage with high-quality, affordable education.",
    benefits: [
      "🎓 High-ranked universities & research institutions.",
      "💰 Low tuition and living costs.",
      "🎁 Scholarships from Italian government.",
      "🍕 Cultural richness and student lifestyle.",
      "🏛️ Programs in art, fashion, design, and engineering.",
    ],
  },
  {
    name: "Japan",
    map: MapJapan,
    description: "Japan blends innovation, tradition, and world-class education.",
    benefits: [
      "🎓 Top universities with global recognition.",
      "🧠 Research and innovation opportunities.",
      "💼 Work opportunities post study.",
      "🎁 MEXT and JASSO scholarships.",
      "🏮 Safe and clean cities with great public transport.",
    ],
  },
  {
    name: "Korea",
    map: MapKorea,
    description: "South Korea offers advanced education and a dynamic lifestyle.",
    benefits: [
      "🎓 Top universities like Seoul National, KAIST.",
      "📱 Tech-driven society & innovation.",
      "🎁 GKS & other scholarship programs.",
      "💼 Internships & job opportunities in major cities.",
      "🎮 Vibrant culture and entertainment industry.",
    ],
  },
  {
    name: "Singapore",
    map: MapSingapore,
    description: "Singapore is Asia’s education hub with top institutions and safety.",
    benefits: [
      "🎓 Renowned universities like NUS & NTU.",
      "🌏 Multicultural and student-friendly environment.",
      "💼 Global business hub with job prospects.",
      "🎁 Scholarships & grants for international students.",
      "🛡️ Clean, safe and efficient city infrastructure.",
    ],
  },
  {
    name: "France",
    map: MapFrance,
    description: "France offers great student lifestyle in Paris, Lyon, Toulouse and more.",
    benefits: [
      "🎓 Top-ranked universities and business schools.",
      "📈 Affordable tuition fees.",
      "🏛️ Rich culture and history.",
      "💼 Job opportunities in fashion, tech & more.",
      "🎁 Scholarships from Campus France.",
    ],
  },
];

const Other = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Hero Section */}
      <div
        className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <h1 className="text-4xl font-bold text-white">Other Countries</h1>
      </div>

      {/* Countries Sections */}
      {countries.map((country, index) => (
        <div key={index} className="px-4 md:px-20 py-12 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
            Study in {country.name}
          </h2>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Why Choose {country.name}?
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              {country.benefits.map((point, i) => (
                <li
                  key={i}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              🎯 Upcoming Intakes
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["February", "July", "November"].map((month) => (
                <div
                  key={month}
                  className="bg-blue-600 text-white px-5 py-2 rounded-full text-base font-medium shadow-md hover:bg-blue-700 transition"
                >
                  {month}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              📍 Explore {country.name}
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg inline-block">
              <img
                src={country.map}
                alt={`${country.name} Map`}
                className="w-full max-w-xl object-cover"
              />
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              {country.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Other;
