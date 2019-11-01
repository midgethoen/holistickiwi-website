import * as React from "react"
import { Link } from "gatsby"
import _ from "lodash/fp"

const selectTreatments = _.pipe(
  _.orderBy(["popularity"], ["desc"]),
  _.take(4)
)

export default ({ treatments }) => {
  const [showAllTreatments, setShowAllTreatments] = React.useState(false)
  const selectedTreatments = showAllTreatments
    ? treatments
    : selectTreatments(treatments)

  return (
    <div className="treatments section-lightpurple section-center">
      <h2>Treatments</h2>
      <h5>Most Popular</h5>

      <div className="card-container card-container-treatments">
        {selectedTreatments.map(treatment => (
          <TreatmentCard key={treatment.slug} {...treatment} />
        ))}
      </div>
      <button onClick={() => setShowAllTreatments(x => !x)}>{ showAllTreatments ?  "show less" : "show all"}</button>
    </div>
  )
}

export const TreatmentCard = ({
  symptoms,
  mostpopular,
  duration,
  name,
  link = "https://www.fresha.com/providers/holistic-kiwi-agx16c7f",
}) => (
  <Link className={mostpopular && "mostpopular"} to="/massages">
    <h3>{name}</h3>
    <h3>{duration} m</h3>
    {symptoms &&
      symptoms.length &&
      symptoms.map((symptom, idx) => <span key={idx}>{symptom}</span>)}
    <a href={link} className="btn btn-primary">
      Book Now
    </a>
  </Link>
)
