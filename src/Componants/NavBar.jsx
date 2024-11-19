import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function NavBar() {
  const allret = () => {
    let timerInterval;
    Swal.fire({
      title: "Loading Products...",
      html: "Please wait while we load the products. <b></b> milliseconds remaining.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("Loading completed");
      }
    });
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand fs-3" href="/">
            <span className="logo">Aura</span>Mart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item underLine">
                <Link
                  to="/"
                  className="nav-link hover active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/story" className="nav-link hover">
                  Story
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => allret()}
                  to="/products"
                  className="nav-link hover"
                  href="/"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/qs" className="nav-link hover" href="/">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link hover" href="/">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link fs-4"
                  href="/"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i class="fa-solid fa-right-to-bracket"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fs-4 text-danger"
                  href="/"
                  data-bs-toggle="modal"
                  data-bs-target="#favoriteProductsModal"
                >
                  <i class="fa-solid fa-heart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Login
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="username" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="rememberMe"
                  />
                  <label class="form-check-label" for="rememberMe">
                    Remember me
                  </label>
                </div>
                <button type="submit" class="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="favoriteProductsModal"
        tabindex="-1"
        aria-labelledby="favoriteProductsModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="favoriteProductsModalLabel">
                Favorite Products
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <div class="d-flex align-items-center">
                    <img
                      src="https://via.placeholder.com/50"
                      class="img-thumbnail me-3"
                      alt="Product 1"
                    />
                    <div>
                      <h5 class="mb-1">Product 1</h5>
                      <p class="mb-1">Short description of Product 1.</p>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-sm">View Details</button>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <div class="d-flex align-items-center">
                    <img
                      src="https://via.placeholder.com/50"
                      class="img-thumbnail me-3"
                      alt="Product 2"
                    />
                    <div>
                      <h5 class="mb-1">Product 2</h5>
                      <p class="mb-1">Short description of Product 2.</p>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-sm">View Details</button>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <div class="d-flex align-items-center">
                    <img
                      src="https://via.placeholder.com/50"
                      class="img-thumbnail me-3"
                      alt="Product 3"
                    />
                    <div>
                      <h5 class="mb-1">Product 3</h5>
                      <p class="mb-1">Short description of Product 3.</p>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-sm">View Details</button>
                </a>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
