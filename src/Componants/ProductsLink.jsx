import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function ProductsLink() {
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
};
    return (
      <div className="h-25 text-center my-4 fs-2">
        <Link onClick={() => allret()} to="/products">
          show all products
        </Link>
      </div>
    );
}
export default ProductsLink