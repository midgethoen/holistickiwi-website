import * as React from "react"
import { Link } from "gatsby"

export default ({children}) => (
  <div className="treatments section-lightpurple section-center">
    <h2>Treatments</h2>
    <h5>Most Popular</h5>

    <div className="card-container card-container-treatments">
    { children }
    </div>
    {/*
      <Link to="/massages">
        <h3>Therapeutic Massages</h3>
        <h3>90 m</h3>
        <span>Improves poor circulation</span>
        <span>Injuries (Office/Sport, RSI, Neck shoulder)</span>
        <span>Muscle Tension (Severe)</span>
        <span>MuscleTension (Mild)</span>
        <span>Lymph swelling/Odema</span>
        <a className="btn btn-primary">Book Now</a>
      </Link>
     */}
  </div>
)

export const TreatmentCard = ({symptoms, mostpopular, duration, name, link='https://www.fresha.com/providers/holistic-kiwi-agx16c7f'}) => (
  <Link className={mostpopular && 'mostpopular'} to="/massages">
    <h3>{name}</h3>
    <h3>{duration} m</h3>
    {
      symptoms && symptoms.length && symptoms.map(
        (symptom, idx) => (
          <span key={idx}>{symptom}</span>
        )
      )
    }
    <a href={link} className="btn btn-primary">Book Now</a>
  </Link>
)
