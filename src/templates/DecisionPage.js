import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Accordion, AccordionItem } from "../components/accordion"
import { ChoiceCard, ChoicesSection } from "../components/choicessection"
import Header from "../components/header"
import Layout from "../components/layout"
import TreatmentsSection from "../components/TreatmentsSection"

const conditionsAndTechniquesQuery = graphql`
  query AllConditionsQuery {
    allConditionsYaml {
      nodes {
        id
        name
        slug
        description
      }
    }
    allTechniquesYaml {
      nodes {
        id
        name
        slug
        description
      }
    }
  }
`

export default props => {
  const { decision, choices, treatments, parent } = props.pageContext
  const {
    allConditionsYaml: { nodes: conditions },
    allTechniquesYaml: { nodes: techniques },
  } = useStaticQuery(conditionsAndTechniquesQuery)
  return (
    <Layout path={props.path}>
      <Header
        parent={parent}
        title={decision.name}
        icon={decision.icon}
      />

      {treatments && treatments.length && (
        <TreatmentsSection treatments={treatments}></TreatmentsSection>
      )}

      <div className="page-intro">
        <p>
          At Holistic Kiwi we customise our massages to suit your specific needs
          and concerns upon your consultation. This means we only need 2 massage
          distinctions;
        </p>
      </div>
      {choices.length > 0 && (
        <ChoicesSection>
          {choices.map(choice => (
            <ChoiceCard
              key={choice.slug}
              title={choice.name}
              subtitle={choice.subtitle}
              linkTo={"/" + choice.slug}
              icon={choice.icon}
            />
          ))}
        </ChoicesSection>
      )}

      <section className="section">

        <Accordion title="Techniques">
          {techniques.map((technique, idx) => (
            <AccordionItem title={technique.name} index={idx}>
              <h2>{technique.name}</h2>
              <p>{technique.description}</p>
              <a
              className="btn btn-primary"
              href="#"
              type="button"
              >
                view treatments
              </a>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion title="Medical Conditions">
          {conditions.map((condition, idx) => (
            <AccordionItem title={condition.name} index={idx}>
            <h2>{condition.name}</h2>
            <p>{condition.description}</p>
              <a
              className="btn btn-primary"
              href="#"
              type="button"
              >
                view treatments
              </a>
            </AccordionItem>
          ))}
        </Accordion>

      </section>

      {/* <h2>treatments</h2>
      <pre>{JSON.stringify(treatments, null, 2)}</pre> */}

      {/* <h2>decision</h2>
      <pre>{JSON.stringify(props.pageContext, null, 2)}</pre> */}

      {/* <h2>conditions</h2>
            <pre>{JSON.stringify(conditions, null, 2)}</pre> */}

      {/* <h2>techniques</h2>
            <pre>{JSON.stringify(techniques, null, 2)}</pre> */}
    </Layout>
  )
}
