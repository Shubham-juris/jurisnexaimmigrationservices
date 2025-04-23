import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import HomeBlog from "../components/Home/HomeBlog";
// import LocationsSlider from "../components/Home/LocationsSlider";
import Media from "../components/Home/Media";
import Services from "../components/Home/Service";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <HomeBlog />
      {/* <LocationsSlider /> */}
      <Media />
    </div>
  );
};

export default HomePage;
