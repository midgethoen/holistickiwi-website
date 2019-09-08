import React from "react"
import Icon from './Icon';
import PropTypes from 'prop-types'

const Header = ({ title, icon='medical-notes',breadcrumb, bookLink='/' }) => {
  return (
    <header className="header">
      <div className="headercontent">
        <Icon name={icon} className="icn" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {breadcrumb}
        </a>
        <h1>{title}</h1>
        {bookLink && 
        <a
        className="btn btn-primary"
        href="https://reactjs.org"
        type="button"
        >
          Book Now
        </a>
      }
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  breadcrumb: PropTypes.string,
  bookLink: PropTypes.string,
}

Header.defaultProps = {
  title: `title`,
  breadcrumb: "breadcrumb",
}

export default Header
