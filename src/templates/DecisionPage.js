import React from "react"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby";



export default (props) =>{
    const { 
        allConditionsYaml:{ nodes: conditions},
        allTechniquesYaml:{ nodes: techniques}
    } = useStaticQuery(graphql`
      query AllConditionsQuery {
        __typename
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
    `);
    return (
        <Layout>
            <h2>decision</h2>
            <pre>{JSON.stringify(props.pageContext, null, 2)}</pre>
            
            <h2>conditions</h2>
            <pre>{JSON.stringify(conditions, null, 2)}</pre>

            <h2>techniques</h2>
            <pre>{JSON.stringify(techniques, null, 2)}</pre>
        </Layout>
    )
}