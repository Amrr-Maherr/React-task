import { Link } from "react-router-dom";

function StoryList() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Stories</h2>
      <ul className="list-group list-group-flush shadow-lg rounded-3">
        <li className="list-group-item bg-light border-0 rounded-top">
          <Link
            to="one"
            className="list-group-item-action d-flex justify-content-between align-items-center py-3 px-4 rounded-2 hover-shadow"
          >
            <span>First Story</span>
            <i className="fa-solid fa-arrow-right ms-3"></i>
          </Link>
        </li>
        <li className="list-group-item bg-light border-0">
          <Link
            to="two"
            className="list-group-item-action d-flex justify-content-between align-items-center py-3 px-4 rounded-2 hover-shadow"
          >
            <span>Second Story</span>
            <i className="fa-solid fa-arrow-right ms-3"></i>
          </Link>
        </li>
        <li className="list-group-item bg-light border-0 rounded-bottom">
          <Link
            to="three"
            className="list-group-item-action d-flex justify-content-between align-items-center py-3 px-4 rounded-2 hover-shadow"
          >
            <span>Third Story</span>
            <i className="fa-solid fa-arrow-right ms-3"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default StoryList;
