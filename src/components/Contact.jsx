import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/contact",
        form
      );

      alert(res.data.message);

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      alert("Unable to send inquiry.");
    }

    setLoading(false);
  };

  return (
    <section className="ftco-section">
      <div className="container">

        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="subheading">Contact Us</span>
            <h2>Request a Free Consultation</h2>
            <p>
              We'd love to hear about your project.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="row">

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <select
                className="form-control"
                name="service"
                value={form.service}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                <option>Construction</option>
                <option>Renovation</option>
                <option>Architecture</option>
                <option>Interior Design</option>
              </select>
            </div>

            <div className="col-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="col-12 mb-3">
              <textarea
                rows="6"
                className="form-control"
                placeholder="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-primary px-5 py-3"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </div>

          </div>

        </form>

      </div>
    </section>
  );
}

export default Contact;