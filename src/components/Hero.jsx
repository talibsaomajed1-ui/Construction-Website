import heroImage from "../assets/images/bg_1.jpg";
<section data-aos="fade-up"></section>

function Hero() {
  return (
    <section
      className="hero-wrap d-flex align-items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="hero-overlay"></div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-7 text-white">

            <h1 className="hero-title">
              Building Your Vision <br /> With Precision
            </h1>

            <p className="hero-text">
              We deliver high-quality construction projects with modern design,
              engineering excellence, and trusted experience.
            </p>

            <div className="mt-4">
              <a href="/services" className="btn btn-warning me-3 px-4">
                Our Services
              </a>

              <a href="/contact" className="btn btn-outline-light px-4">
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;