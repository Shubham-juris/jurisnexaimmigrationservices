
// import { useState, useEffect } from "react";
// import Canada from "../../assets/Country/canada.jpg";
// import India from "../../assets/Country/india.jpg";
// import Australia from "../../assets/Country/australia.jpg";
// import UnitedKingdom from "../../assets/Country/unitedkingdom.jpg";

// const locations = [
//   {
//     id: 1,
//     name: "Canada",
//     caption: "Our offices in Toronto and Vancouver",
//     image: Canada,
//   },
//   {
//     id: 2,
//     name: "India",
//     caption: "New Delhi and Mumbai locations",
//     image: India,
//   },
//   {
//     id: 3,
//     name: "Australia",
//     caption: "Sydney and Melbourne branches",
//     image: Australia,
//   },
//   {
//     id: 4,
//     name: "United Kingdom",
//     caption: "London headquarters",
//     image: UnitedKingdom,
//   },
// ];

// export default function LocationsSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === locations.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const goToSlide = (index) => setActiveIndex(index);

//   return (
//     <div className="w-full bg-gray-50 py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
//           Our Locations
//         </h2>
//         <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
//           Strategically positioned centers fostering global connections,
//           reflecting accessibility, and embracing cultural diversity for
//           seamless interactions and engagement.
//         </p>

//         <div className="relative overflow-hidden rounded-lg h-96 md:h-[500px]">
//           {locations.map((location, index) => (
//             <div
//               key={location.id}
//               className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
//                 index === activeIndex
//                   ? "opacity-100 z-10"
//                   : "opacity-0 z-0 pointer-events-none"
//               }`}
//             >
//               <div
//                 className="w-full h-full bg-center bg-cover relative"
//                 style={{
//                   backgroundImage: `url("${location.image}")`,
//                 }}
//               >
//                 <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//                 <div className="absolute bottom-10 left-10 text-white">
//                   <h3 className="text-5xl font-bold mb-2">{location.name}</h3>
//                   <p className="text-xl">{location.caption}</p>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//             {locations.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   index === activeIndex
//                     ? "bg-white"
//                     : "bg-white bg-opacity-50"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={() =>
//               setActiveIndex(
//                 activeIndex === 0 ? locations.length - 1 : activeIndex - 1
//               )
//             }
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full"
//             aria-label="Previous slide"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15.75 19.5L8.25 12l7.5-7.5"
//               />
//             </svg>
//           </button>

//           <button
//             onClick={() =>
//               setActiveIndex(
//                 activeIndex === locations.length - 1 ? 0 : activeIndex + 1
//               )
//             }
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full"
//             aria-label="Next slide"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M8.25 4.5l7.5 7.5-7.5 7.5"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
