import React, { useContext, useRef, useCallback } from "react"
import Icon from '../components/Icon'
import { Link } from "gatsby";

export const ChoicesSection = ({ children }) => {
  return <div className="card-container card-container-choicelink">{children}</div>
}

export const ChoiceCard = ({
  icon = "medical-notes",
  title = "title",
  subtitle = "subtitle",
  linkTo = "/",
}) => {
  // create clink handler to make entire card clickable
  const linkRef = useRef()
  const handleClick = useCallback(() => linkRef.current && linkRef.current.click(), [linkRef])
  return (
    <a className="card" onClick={handleClick}>
      <Icon name={icon} color='primary' className="icn" alt="logo" />
      <h5>{title}</h5>
      <p>{subtitle}</p>
      <Link
        ref={linkRef}
        className="App-link"
        to={linkTo}
      >
        View Treatment
      </Link>
    </a>
  )
}
