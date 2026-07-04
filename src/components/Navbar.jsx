import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container d-flex justify-content-between align-items-center">

        <div className="logo">
          CONSTRUCT
        </div>

        <ul className="nav-links">

          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>

          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>

          <li className={location.pathname === "/services" ? "active" : ""}>
            <Link to="/services">Services</Link>
          </li>

          <li className={location.pathname === "/projects" ? "active" : ""}>
            <Link to="/projects">Projects</Link>
          </li>

          <li className={location.pathname === "/blog" ? "active" : ""}>
            <Link to="/blog">Blog</Link>
          </li>

          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        <Link to="/contact" className="nav-btn">
          Get Quote
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;