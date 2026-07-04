import { FaBuilding, FaDraftingCompass, FaTools, FaHammer, FaTruck, FaHardHat } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaBuilding />,
      title: "Building Construction",
      desc: "We build residential and commercial structures with high-quality standards."
    },
    {
      icon: <FaDraftingCompass />,
      title: "Architecture Design",
      desc: "Modern and functional architectural designs tailored to your needs."
    },
    {
      icon: <FaTools />,
      title: "Renovation Works",
      desc: "Upgrade and improve existing structures with expert renovation services."
    },
    {
      icon: <FaHammer />,
      title: "Interior Works",
      desc: "Stylish and functional interior design for homes and offices."
    },
    {
      icon: <FaTruck />,
      title: "Project Management",
      desc: "We handle your project from planning to execution efficiently."
    },
    {
      icon: <FaHardHat />,
      title: "Civil Engineering",
      desc: "Strong engineering solutions for infrastructure and large projects."
    }
  ];

  return (
    <section className="services-section">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-text">
            We provide complete construction solutions from start to finish.
          </p>
        </div>

        <div className="row">
          {services.map((item, index) => (
            <div className="col-md-4 mb-4" key={index} data-aos="zoom-in">

              <div className="service-card">

                <div className="service-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>
                <p>{item.desc}</p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;