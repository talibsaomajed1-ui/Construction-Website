import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import AboutCompany from "../components/AboutCompany";
import Counter from "../components/Counter";
import FeaturedProjects from "../components/FeaturedProjects";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import ContactCTA from "../components/ContactCTA";

function Home() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <About />
      <Services />
      <Counter />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <ContactCTA />
    </>
  );
}

export default Home;