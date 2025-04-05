import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Common/Navbar'; 
import Footer from '../components/Common/Footer';
import HomePage from '../Page/HomePage';
import AustraliaPage from '../Page/AustraliaPage';
import CanadaPage from '../Page/CanadaPage';
import UkPage from '../Page/UkPage';
import CursorIcon from '../components/Common/CursorIcon';
import AboutUsPage from '../Page/AboutUsPage';
import USAPage from '../Page/UsaPage';
import Other from '../Page/Other';
import Scholarship from '../Page/Scholarship';
import ContactUs from '../components/Home/ContactUs';
import ContactUsPage from '../Page/ContactUsPage';




const RouterComponent = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} /> 
        <Route path="/australia" element={<AustraliaPage/>} />
        <Route path="/canada" element={<CanadaPage />} />
        <Route path="/united-kingdom" element={<UkPage/>}/>
        <Route path="/usa" element={<USAPage />} />
        <Route path="/other" element={<Other />} />
        <Route path="/scholarships" element={<Scholarship />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <ContactUs />
      <Footer />
      <CursorIcon/>
    </Router>
  );
};

export default RouterComponent;
