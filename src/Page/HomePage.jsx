import CursorIcon from "../components/Common/CursorIcon";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import About from "../components/Home/About";
import ContactUs from "../components/Home/ContactUs";
import Hero from "../components/Home/Hero";
import Media from "../components/Home/Media";
import Services from "../components/Home/Service";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ContactUs />
      <Media />
      <Footer />
      <CursorIcon/>
    </div>
  );
};

export default HomePage;
