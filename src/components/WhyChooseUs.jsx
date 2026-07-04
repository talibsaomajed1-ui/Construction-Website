import { FaHardHat, FaTools, FaClock, FaShieldAlt, FaDollarSign, FaUsers } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaHardHat />,
      title: "Expert Engineers",
      desc: "Highly skilled professionals with years of construction experience."
    },
    {
      icon: <FaTools />,
      title: "Modern Equipment",
      desc: "We use advanced tools and machinery for efficient construction."
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      desc: "We ensure every project is completed within the agreed timeline."
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety First",
      desc: "Strict safety protocols to protect workers and clients."
    },
    {
      icon: <FaDollarSign />,
      title: "Affordable Pricing",
      desc: "High-quality work at competitive and transparent pricing."
    },
    {
      icon: <FaUsers />,
      title: "Trusted Team",
      desc: "A reliable team trusted by hundreds of satisfied clients."
    }
  ];

  return (
    <section className="why-section">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">We Build With Quality & Trust</h2>
          <p className="section-text">
            We are committed to delivering excellence in every project we handle.
          </p>
        </div>

        <div className="row">
          {features.map((item, index) => (
            <div className="col-md-4 mb-4" key={index} data-aos="zoom-in">

              <div className="why-card">

                <div className="why-icon">
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

export default WhyChooseUs;