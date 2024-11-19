import React, { useState, useEffect } from "react"; // الاستيراد من react
import axios from "axios";
import { useParams } from "react-router-dom"; // تأكد من أن الاستيراد صحيح
import ProductTitle from "./ProductsTitle";

function ProductDetails() {
  const { productsId } = useParams(); 
  const [data, setData] = useState({});

  useEffect(() => {
    
    axios
      .get(`https://dummyjson.com/products/${productsId}`)
      .then((response) => {
        setData(response.data); 
      })
      .catch((error) => {
        console.log(error); 
      });
  }, []); 

  return (
    <div className="container my-5">
      {data ? (
        <div className="card mb-3 my-5">
          <div className="row g-0">
            <div className="col-12">
              <ProductTitle />
            </div>
            <div className="col-md-6">
              <img
                src={data.images}
                className="img-fluid rounded-start"
                alt={data.title}
                style={{ objectFit: "cover", height: "300px", width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text">
                  <strong>Price:</strong> ${data.price}
                </p>
                <p className="card-text">
                  <strong>Status:</strong>{" "}
                  {data.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p> // عرض رسالة تحميل إذا لم يتم استرجاع البيانات بعد
      )}
    </div>
  );
}

export default ProductDetails;
