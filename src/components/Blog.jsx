import image1 from "../assets/images/image_1.jpg";
import image2 from "../assets/images/image_2.jpg";
import image3 from "../assets/images/image_3.jpg";
import image4 from "../assets/images/image_4.jpg";
import image5 from "../assets/images/image_5.jpg";
import image6 from "../assets/images/image_6.jpg";

function Blog() {
  const posts = [
    {
      img: image1,
      date: "Sept. 06, 2020",
      title: "Best for any industrial & business solution",
    },
    {
      img: image2,
      date: "Aug. 22, 2020",
      title: "Modern construction techniques for better results",
    },
    {
      img: image3,
      date: "July 15, 2020",
      title: "Why structural safety matters in every project",
    },
  ];

  return (
    <section className="ftco-section bg-light">
      <div className="container">

        <div className="row justify-content-center mb-5" data-aos="fade-up">
          <div className="col-md-7 text-center">
            <span className="section-tag">Blog</span>
            <h2 className="section-title">Latest Updates</h2>
          </div>
        </div>

        <div className="row">
          {posts.map((post, index) => (
            <div className="col-lg-4 mb-4" key={index} data-aos="zoom-in">

              <div className="blog-entry">

                {/* IMAGE */}
                <div
                  className="block-20"
                  style={{
                    backgroundImage: `url(${post.img})`,
                    height: "250px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                  }}
                />

                {/* TEXT */}
                <div className="text d-block p-3">

                  <div className="meta mb-2">
                    <span className="fa fa-calendar mr-2"></span>
                    {post.date}
                  </div>

                  <h3 className="heading" style={{ fontWeight: "700" }}>
                    {post.title}
                  </h3>

                  <a
                    href="#"
                    className="btn btn-sm btn-warning mt-3 px-3"
                    style={{ borderRadius: "20px" }}
                  >
                    Read more
                  </a>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blog;