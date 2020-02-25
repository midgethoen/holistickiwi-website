import React from "react"
import { Link } from "gatsby";

export default () => (
  <footer className="footer-wrap colorscheme-dark">
    <div className="content">
      <div className="col">
        <Link to="/about-us">About us</Link>
        <Link to="/contact">Contact</Link>
        <Link className="displaynone" to="/treatment-comparison">Treatment comparison</Link>
        <Link className="displaynone" to="/certificates">Certificates</Link>
        <Link to="/privacy-statement">Privacy Statement</Link>
        <Link className="displaynone" to="/view-results">View Results</Link>
        <Link className="displaynone" to="/organic-skincare-consultancy">Organic Skincare Consultancy</Link>
      </div>
      <div className="col">
        <Link className="" to="/massageoverview">Massages</Link>
        <Link className="" to="/skintreatmentoverview">Skin Treatments</Link>
        <Link className="" to="/waxoverview">Waxing</Link>
        <a className="" href="https://holistickiwishop.com/">Webshop</a>
        <a className="" href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f">Booking</a>
      </div>
      <div className="col">
        <a href="https://www.facebook.com/Holistickiwi/">Facebook</a>
        <a href="https://www.instagram.com/holistickiwiclinic/">Instagram</a>
        <a href="https://www.linkedin.com/company/holistic-kiwi/about/">Linkedin</a>
      </div>
      <div className="col">
        <p>
          Kruisstraat 39-41<br/>
          2611 ML Delft<br/>
          The Netherlands<br/>
          06 192 833 21<br/>
          contact@holistickiwi.com<br/>
        </p>
      </div>
    </div>
  </footer>
)
