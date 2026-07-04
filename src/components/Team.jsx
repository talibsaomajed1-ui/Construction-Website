import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";

function Team() {
  const members = [
    {
      id: 1,
      name: "John Anderson",
      position: "Project Manager",
      image: team1,
    },
    {
      id: 2,
      name: "Michael Smith",
      position: "Civil Engineer",
      image: team2,
    },
    {
      id: 3,
      name: "David Johnson",
      position: "Architect",
      image: team3,
    },
    {
      id: 4,
      name: "Sarah Williams",
      position: "Site Supervisor",
      image: team4,
    },
  ];

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center">
            <span className="subheading">Our Team</span>
            <h2>Meet Our Experts</h2>
          </div>
        </div>

        <div className="row">
          {members.map((member) => (
            <div className="col-md-3" key={member.id}>
              <div className="staff">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    height: "350px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                <div className="text text-center pt-3">
                  <h3>{member.name}</h3>
                  <span>{member.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;