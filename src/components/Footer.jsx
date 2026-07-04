import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">

        <div className="row">

          {/* ABOUT */}

          <div className="col-lg-4 col-md-6 mb-5">

            <h4>About Wilcon</h4>

            <p>
              Wilcon is a trusted construction company delivering
              high-quality residential, commercial and industrial
              projects with precision, safety and innovation.
            </p>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}

          <div className="col-lg-2 col-md-6 mb-5">

            <h4>Quick Links</h4>

            <ul>

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/services">Services</Link></li>

              <li><Link to="/projects">Projects</Link></li>

              <li><Link to="/blog">Blog</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* SERVICES */}

          <div className="col-lg-3 col-md-6 mb-5">

            <h4>Services</h4>

            <ul>

              <li>Construction</li>

              <li>Renovation</li>

              <li>Architecture</li>

              <li>Interior Design</li>

              <li>Project Management</li>

            </ul>

          </div>

          {/* CONTACT */}

          <div className="col-lg-3 col-md-6">

            <h4>Contact</h4>

            <p>
              <FaMapMarkerAlt /> Manila, Philippines
            </p>

            <p>
              <FaPhoneAlt /> +63 900 000 0000
            </p>

            <p>
              <FaEnvelope /> your@email.com
            </p>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          © {new Date().getFullYear()} Wilcon Construction. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}

export default Footer;