import StoryList from "./StoryList";
import StoryImage from "./StroyImage";
import StoryTitle from "./StoryTitle";
import { Outlet } from "react-router-dom";

function StorySection() {
  return (
    <section className="story my-5">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-12 my-3">
            <StoryTitle />
          </div>
          <div className="col-lg-3 col-12">
            <StoryList />
          </div>
          <div className="col-lg-6 col-12">
            <StoryImage />
          </div>
          <div className="col-lg-3 col-12">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
