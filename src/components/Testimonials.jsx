import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";

function Testimonials() {
  const reviews = [
    {
      name: "John Cruz",
      role: "Project Owner",
      text: "Excellent work! Delivered our project on time with outstanding quality.",
      image: person1,
    },
    {
      name: "Maria Santos",
      role: "Business Owner",
      text: "Very professional team. Smooth and transparent construction process.",
      image: person2,
    },
    {
      name: "David Lim",
      role: "Developer",
      text: "High-quality output and great communication from start to finish.",
      image: person3,
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Clients Say</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={1}
        >

          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card" data-aos="fade-up">

                <img src={item.image} className="testimonial-img" />

                <p className="testimonial-text">
                  “{item.text}”
                </p>

                <h4>{item.name}</h4>
                <span>{item.role}</span>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}

export default Testimonials;