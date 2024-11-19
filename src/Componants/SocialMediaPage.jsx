import React from "react";

function SocialMediaPage() {
  return (
    <section className="social-media py-5 my-4 vh-100 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Connect with Us</h2>
        <p className="text-center mb-5 fs-5 text-muted">
          Stay connected and never miss an update. Follow us on our social media
          channels.
        </p>

        <div className="row text-center justify-content-center">
          <div className="col-12 col-md-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2"
            >
              <i className="fab fa-facebook-f fa-2x"></i> Facebook
            </a>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info btn-lg d-flex align-items-center justify-content-center gap-2"
            >
              <i className="fab fa-twitter fa-2x"></i> Twitter
            </a>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger btn-lg d-flex align-items-center justify-content-center gap-2"
            >
              <i className="fab fa-instagram fa-2x"></i> Instagram
            </a>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2"
            >
              <i className="fab fa-linkedin-in fa-2x"></i> LinkedIn
            </a>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-lg d-flex align-items-center justify-content-center gap-2"
            >
              <i className="fab fa-github fa-2x"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMediaPage;
