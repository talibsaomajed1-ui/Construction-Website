import { useState } from "react";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";

function FeaturedProjects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Building A Condominium",
      category: "Building",
      location: "Quezon City, Philippines",
      image: project1,
    },
    {
      id: 2,
      title: "Office Tower Project",
      category: "Commercial",
      location: "Makati City",
      image: project2,
    },
    {
      id: 3,
      title: "Bridge Construction",
      category: "Infrastructure",
      location: "Manila",
      image: project3,
    },
    {
      id: 4,
      title: "Mall Expansion",
      category: "Commercial",
      location: "Cebu City",
      image: project1,
    },
    {
      id: 5,
      title: "Residential Subdivision",
      category: "Residential",
      location: "Laguna",
      image: project2,
    },
    {
      id: 6,
      title: "Highway Development",
      category: "Infrastructure",
      location: "North Luzon",
      image: project3,
    },
  ];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
  className="ftco-section"
  style={{
    background: "#f8fafc",
  }}
>
      <div className="container">

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <span className="subheading">Our Portfolio</span>
          <h2
  className="display-5 fw-bold"
  style={{ color: "#111827" }}
>
            Featured Projects
          </h2>

          <p className="text-muted">
            Delivering quality construction with precision,
            innovation and excellence.
          </p>
        </div>

        {/* FILTER BUTTONS */}

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          {[
            "All",
            "Building",
            "Commercial",
            "Infrastructure",
            "Residential",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`project-filter ${
                filter === cat ? "active" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row">

          {filtered.map((project) => (

            <div
              key={project.id}
              className="col-lg-4 col-md-6 mb-4"
              data-aos="zoom-in"
            >

              <div className="project-card">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">

                  <span className="badge bg-warning text-dark mb-3">
                    {project.category}
                  </span>

                  <h4>{project.title}</h4>

                  <p>{project.location}</p>

                  <button className="btn btn-warning mt-2">
                    View Project
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;