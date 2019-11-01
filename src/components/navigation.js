import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <nav className="topnav">
    <div className="topnav-left">
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className="topnav-right">
      <Link to="/massages">Massages</Link>
      <Link to="/skincare">Skincare Treatments</Link>
      <Link to="/wax">Waxing</Link>
      <Link to="/medical-conditions">Medical Conditions</Link>
      <a
        className=""
        href="https://holistickiwishop.com/"
      >
        Webshop
      </a>
      <a
        className="btn btn-primary"
        href="https://www.fresha.com/providers/holistic-kiwi-agx16c7f"
        type="button"
      >
        Book Now
      </a>
    </div>
  </nav>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
