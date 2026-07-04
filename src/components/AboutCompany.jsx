import aboutImage from "../assets/images/about.jpg";
import aboutVideoImage from "../assets/images/about-2.jpg";

function AboutCompany() {
  return (
    <section className="about-section" id="about-section">
      <div className="container">

        <div className="row align-items-center">

          {/* IMAGE */}
          <div className="col-lg-6 mb-4" data-aos="fade-right">

            <div className="about-image">
              <img src={aboutImage} alt="About Company" />

              <div className="experience-badge">
                <h2>25+</h2>
                <span>Years Experience</span>
              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="col-lg-6" data-aos="fade-left">

            <span className="section-tag">About Our Company</span>

            <h2 className="section-title">
              Building Strong Foundations for the Future
            </h2>

            <p className="section-text">
              We are a trusted construction company delivering high-quality residential,
              commercial, and infrastructure projects with precision, safety, and innovation.
            </p>

            <div className="about-features">

              <div className="feature">
                <h5>✔ Quality Construction</h5>
                <p>We ensure every project meets the highest standards.</p>
              </div>

              <div className="feature">
                <h5>✔ Expert Engineers</h5>
                <p>Our team brings years of industry experience.</p>
              </div>

              <div className="feature">
                <h5>✔ On-Time Delivery</h5>
                <p>We complete projects within schedule and budget.</p>
              </div>

            </div>

            {/* VIDEO */}
            <div className="video-box mt-4">

              <a href="#" className="video-thumb">
                <img src={aboutVideoImage} alt="Video" />
                <div className="play-btn">▶</div>
              </a>

              <div className="video-text">
                Watch how we build world-class projects.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutCompany;