import CupOfCouple from "../Slider-Images/CupOfCouple.jpg";
import Negativespace from "../Slider-Images/Negativespace.jpg";
import robertoHund from "../Slider-Images/robertoHund.jpg";

function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={CupOfCouple}
            className="d-block w-100"
            alt="Premium Products"
          />
          <div className="carousel-caption text-start d-flex justify-content-start align-items-center h-100 text-white p-4">
            <div>
              <h1 className="display-4">Premium Products</h1>
              <p className="lead">High-quality items just for you.</p>
              <button className="btn fs-4 btn-dark text-white rounded-pill">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={Negativespace}
            className="d-block w-100"
            alt="Latest Trends"
          />
          <div className="carousel-caption  text-start d-flex justify-content-start align-items-center h-100 text-white p-4">
            <div>
              <h1 className="display-4">Latest Trends</h1>
              <p className="lead">Stay ahead with the latest styles.</p>
              <button className="btn fs-4 btn-dark text-white rounded-pill">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={robertoHund}
            className="d-block w-100"
            alt="Unbeatable Offers"
          />
          <div className="carousel-caption  text-start d-flex justify-content-start align-items-center h-100 text-white p-4">
            <div>
              <h1 className="display-4">Unbeatable Offers</h1>
              <p className="lead">Get the best deals available.</p>
              <button className="btn fs-4 btn-dark text-white rounded-pill">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
