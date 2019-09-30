import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import { ChoicesSection, ChoiceCard } from "../components/choicessection"
import { Accordion, AccordionItem } from "../components/accordion"
import TreatmentsSection, { TreatmentCard } from "../components/TreatmentsSection"

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
  const { decision, choices, treatments } = props.pageContext
  const {
    allConditionsYaml: { nodes: conditions },
    allTechniquesYaml: { nodes: techniques },
  } = useStaticQuery(conditionsAndTechniquesQuery)
  return (
    <Layout>
      <Header title={decision.name} icon={decision.icon} breadcrumb={""} />
      {choices.length > 0 && (
        <ChoicesSection>
          {choices.map(choice => (
            <ChoiceCard
              key={choice.slug}
              title={choice.name}
              linkTo={"/" + choice.slug}
              icon={choice.icon}
            />
          ))}
        </ChoicesSection>
      )}

      <section className="section">
        <Accordion title="Techniques">
          {conditions.map((condition, idx) => (
            <AccordionItem title={condition.name} index={idx}>
              {condition.description}
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion title="Medical Conditions">
          {techniques.map((technique, idx) => (
            <AccordionItem title={technique.name} index={idx}>
              {technique.description}
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      
      {
        treatments && treatments.length && 
        <TreatmentsSection>
          {
            treatments.map(
              treatment => (
                <TreatmentCard key={treatment.slug} {...treatment} />
              )
            )}
        </TreatmentsSection>
      }

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
