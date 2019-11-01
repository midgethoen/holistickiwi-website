import React from "react"
import Icon from './Icon';
import PropTypes from 'prop-types'

const Header = ({ title, parent, icon='medical-notes',nbreadcrumb, bookLink='https://www.fresha.com/providers/holistic-kiwi-agx16c7f' }) => {
  return (
    <header className="header">
      <div className="headercontent">
        <Icon name={icon} className="icn" alt="logo" />
        {parent && <a
          className="App-link"
          href={'/'+parent.slug}
        >
          {parent.name}
        </a>}
        <h1>{title}</h1>
        {bookLink && 
        <a
        className="btn btn-primary"
        href={bookLink}
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
