import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

function AboutSection() {
  return (
    <section className="about">
      <div className="container-fluid p-0 ">
        <div className="row g-0 d-flex align-items-center justify-content-center">
          <div className="col-xl-6 col-12">
            <AboutImage />
          </div>
          <div className="AboutContent col-xl-6 col-12 text-white bg-dark p-4 d-flex align-items-center justify-content-center">
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
