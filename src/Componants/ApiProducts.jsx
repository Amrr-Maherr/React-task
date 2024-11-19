import { useState, useEffect } from "react";
import axios from "axios";
import ProductTitle from "./ProductsTitle";
import { Link } from "react-router-dom";

function ApiProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <ProductTitle />
          </div>
          {data.length > 0 ? (
            data.map((product) => {
              return (
                <div className="col-md-4 mb-4" key={product.id}>
                  <div className="card shadow-lg">
                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      alt={product.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">
                        {product.description.slice(0, 100)}...
                      </p>
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-primary"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center">
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading products...
            </p>
          )}
        </div>
        <div className="row">
          <div className="col-12 text-center my-4">
            <Link to="/" className="btn btn-secondary btn-lg">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApiProducts;
