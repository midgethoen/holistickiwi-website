import React from "react"
import { Link } from "gatsby";

export default () => (
  <footer className="footer-wrap">
    <div className="col-wrap">
      <div className="col">
        <Link to="/about-us">About us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/treatment-comparison">Treatment comparison</Link>
        <Link to="/certificates">Certificates</Link>
        <Link to="/privacy-statement">Privacy Statement</Link>
        <Link to="/view-results">View Results</Link>
        <Link to="/organic-skincare-consultancy">Organic Skincare Consultancy</Link>
      </div>
      <div className="col"></div>
      <div className="col"></div>
      <div className="col">
        <p>
          Kruisstraat 39-41 2611 ML Delft The Netherlands 06 192 833 21
          contact@holistickiwi.com
        </p>
      </div>
    </div>
  </footer>
)
