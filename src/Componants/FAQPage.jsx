import { Link } from "react-router-dom";

function FAQPage() {
  return (
    <section className="faq-page py-5 my-4">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="list-group">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to="/faq/1" className="list-group-item-action">
                What is the return policy?
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/faq/2" className="list-group-item-action">
                How do I track my order?
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/faq/3" className="list-group-item-action">
                How can I contact customer service?
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/faq/4" className="list-group-item-action">
                Do you offer international shipping?
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FAQPage;
