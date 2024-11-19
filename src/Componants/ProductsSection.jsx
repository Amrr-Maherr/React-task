import ProductCard from "./ProductCard";
import CupOfCouple from "../Slider-Images/CupOfCouple.jpg";
import Negativespace from "../Slider-Images/Negativespace.jpg";
import robertoHund from "../Slider-Images/robertoHund.jpg";
import ProductTitle from "./ProductsTitle";

function ProductSection() {
  return (
    <section className="products ">
      <div className="container">
        <h2 className="text-center ">
          <ProductTitle />
        </h2>
        <div className="row">
          <div className="col-lg-4 col-12 my-3">
            <ProductCard
              cardTitle="Cup of Couple"
              cardText="A beautifully designed cup for two, perfect for sharing moments together."
              cardPrice="$15.99"
              spanText="Limited Edition"
              cardImg={CupOfCouple}
            />
          </div>
          <div className="col-lg-4 col-12 my-3">
            <ProductCard
              cardTitle="Noise-Canceling Headphones"
              cardText="Experience superior sound with premium noise cancellation."
              cardPrice="$249.99"
              spanText="New Arrival"
              cardImg={Negativespace}
            />
          </div>
          <div className="col-lg-4 col-12 my-3">
            <ProductCard
              cardTitle="Vintage Camera"
              cardText="Capture timeless memories with this elegant vintage-style camera."
              cardPrice="$349.99"
              spanText="Top Pick"
              cardImg={robertoHund}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
