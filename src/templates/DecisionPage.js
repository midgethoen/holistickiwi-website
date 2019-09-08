import React from "react"
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import Header from '../components/header'
import { ChoicesSection, ChoiceCard } from '../components/choicessection'

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
      }
    }
}      
`;


export default (props) =>{
    const { decision, choices} = props.pageContext
    const { 
        allConditionsYaml:{ nodes: conditions},
        allTechniquesYaml:{ nodes: techniques}
    } = useStaticQuery(conditionsAndTechniquesQuery);
    return (
        <Layout>
          <Header title={decision.name} icon={decision.icon} breadcrumb={''}/>
          {choices.length > 0 &&
            <ChoicesSection>
              {choices.map(choice => <ChoiceCard title={choice.name} linkTo={'/'+choice.slug} icon={choice.icon} />)}
            </ChoicesSection>
          }


            <h2>decision</h2>
            <pre>{JSON.stringify(props.pageContext, null, 2)}</pre>
            
            <h2>conditions</h2>
            <pre>{JSON.stringify(conditions, null, 2)}</pre>

            <h2>techniques</h2>
            <pre>{JSON.stringify(techniques, null, 2)}</pre>
        </Layout>
    )
}