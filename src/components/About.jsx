import bg2 from "../assets/images/bg_2.jpg";
import service1 from "../assets/images/services-1.jpg";
import service2 from "../assets/images/services-2.jpg";
import service3 from "../assets/images/services-3.jpg";



function About() {
  return (
    <>
      {/* Call To Action */}
      <div data-aos="fade-right"></div>
      <section className="ftco-intro">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <div
                className="img"
                style={{ backgroundImage: `url(${bg2})` }}
              >
                <div className="overlay"></div>

                <h2>Providing Personalized and High Quality Services</h2>

                <p>
                  Enter a short description about your construction company and
                  the quality of services you provide.
                </p>

                <p className="mb-0">
                  <a href="#" className="btn btn-primary px-4 py-3">
                    Request a Quote
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="ftco-section bg-half-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <span className="subheading">Our Services</span>

              <h2 className="mb-4">We Offer Services</h2>
            </div>
          </div>

          <div className="row">

            {/* Card 1 */}
            <div className="col-md-4">
              <div className="services-wrap">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${service1})` }}
                ></div>

                <div className="text">
                  <div className="icon">
                    <span className="flaticon-architect"></span>
                  </div>

                  <h2>Service Title 1</h2>

                  <p>
                    Enter a short description of this construction service.
                  </p>

                  <a href="#" className="btn-custom">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="services-wrap">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${service2})` }}
                ></div>

                <div className="text">
                  <div className="icon">
                    <span className="flaticon-worker"></span>
                  </div>

                  <h2>Service Title 2</h2>

                  <p>
                    Enter a short description of this construction service.
                  </p>

                  <a href="#" className="btn-custom">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="services-wrap">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${service3})` }}
                ></div>

                <div className="text">
                  <div className="icon">
                    <span className="flaticon-hammer"></span>
                  </div>

                  <h2>Service Title 3</h2>

                  <p>
                    Enter a short description of this construction service.
                  </p>

                  <a href="#" className="btn-custom">
                    Read More
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;