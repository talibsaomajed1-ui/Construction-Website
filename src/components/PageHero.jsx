import heroImage from "../assets/images/bg_2.jpg";

function PageHero({ title }) {
  return (
    <section
      className="hero-wrap hero-wrap-2"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="overlay"></div>

      <div className="container">
        <div className="row no-gutters slider-text align-items-end">
          <div className="col-md-9 pb-5">
            <p className="breadcrumbs">
              Home / {title}
            </p>

            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;