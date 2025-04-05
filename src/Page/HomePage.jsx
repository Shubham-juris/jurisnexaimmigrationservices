import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Media from "../components/Home/Media";
import Services from "../components/Home/Service";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Media />
    </div>
  );
};

export default HomePage;
