import PageHero from "../components/PageHero";
import About from "../components/About";
import AboutCompany from "../components/AboutCompany";
import Counter from "../components/Counter";
import WhyChooseUs from "../components/WhyChooseUs";
<div data-aos="fade-up"></div>
function AboutPage() {
  return (
    <>
      <PageHero title="About Us" />

      <About />
      <AboutCompany />
      <Counter />
      <WhyChooseUs />
    </>
  );
}

export default AboutPage;