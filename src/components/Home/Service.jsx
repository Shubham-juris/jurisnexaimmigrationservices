import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Img from "../../assets/HeroImg/BgImg.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.03 },
};

const Services = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {/* Study Service */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          className="rounded-lg bg-white p-6 sm:p-8 shadow-md"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-jurisnexa-blue-100 text-jurisnexa-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Study</h3>
          </div>
          <p className="mb-4 text-gray-600 text-sm sm:text-base">
            Beyond Borders, Into Books: Get Ready for Your Study Visa!
          </p>
          <div className="mb-6">
            <img
              src={Img}
              alt="Students studying abroad"
              className="h-40 sm:h-48 w-full rounded-lg object-cover"
            />
          </div>
          <Link
            to="/study"
            className="inline-block rounded border-2 border-jurisnexa-blue-600 px-4 py-2 sm:px-6 font-medium text-jurisnexa-blue-600 transition-colors hover:bg-jurisnexa-blue-600 hover:text-white"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Settle Service */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          className="rounded-lg bg-white p-6 sm:p-8 shadow-md"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-jurisnexa-blue-100 text-jurisnexa-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Settle</h3>
          </div>
          <p className="mb-4 text-gray-600 text-sm sm:text-base">
            Beyond Residency, Into Identity: Your Citizenship Visa Story Begins!
          </p>
          <div className="mb-6">
            <img
              src={Img}
              alt="Family settling abroad"
              className="h-40 sm:h-48 w-full rounded-lg object-cover"
            />
          </div>
          <Link
            to="/settle"
            className="inline-block rounded border-2 border-jurisnexa-blue-600 px-4 py-2 sm:px-6 font-medium text-jurisnexa-blue-600 transition-colors hover:bg-jurisnexa-blue-600 hover:text-white"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
