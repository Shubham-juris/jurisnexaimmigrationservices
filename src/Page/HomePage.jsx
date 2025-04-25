import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import HomeBlog from "../components/Home/HomeBlog";
import Media from "../components/Home/Media";
import Services from "../components/Home/Service";
import Country from "../components/Home/Country";
import ClientReviews from "../components/Home/ClientReviews";


export default function HomePage ()  {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <HomeBlog />
      <Country /> 
      <ClientReviews />
      <Media />
    </>
  )
}

