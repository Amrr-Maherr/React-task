import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>
              Aura<span className="logo">Mart</span>
            </h5>
            <p>
              Explore a wide range of products at AuraMart. Quality products at
              the best prices.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-white text-decoration-none">
                  Story
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-white text-decoration-none"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/qs" className="text-white text-decoration-none">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a
                  href="/"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="me-3">
                <a
                  href="/"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="me-3">
                <a
                  href="/"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="me-3">
                <a
                  href="/"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; AuraMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
