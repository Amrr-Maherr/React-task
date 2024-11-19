import Swal from "sweetalert2";

function ProductCard({ cardTitle, cardText, cardPrice, cardImg, spanText }) {
  const alert = (event) => {
    event.preventDefault(); // منع السلوك الافتراضي (مثل إعادة توجيه الرابط)
    Swal.fire({
     title: "Added to Favorites!",
     text: "The product has been successfully added to your favorites.",
     icon: "success",
   });
  };

  return (
    <div className="card mx-auto shadow-lg" style={{ width: "18rem" }}>
      <img src={cardImg} className="card-img-top" alt={cardTitle} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text text-muted">{cardText}</p>
          </div>
          <p className="card-price ms-3">{cardPrice}</p>
        </div>
        <div className="icon p-1 d-flex align-items-center justify-content-between mt-2">
          <a href="/" onClick={(event) => alert(event)}>
            <i className="fa-solid fa-heart text-danger fs-4"></i>
          </a>
          <span className="badge bg-secondary">{spanText}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
