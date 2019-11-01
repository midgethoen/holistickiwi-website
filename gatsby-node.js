const { GraphQLString } = require("gatsby/graphql")
const _ = require('lodash/fp')
const path = require('path')
const micromatch = require('micromatch');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node }) => {
    // console.log(node.internal.type)
}

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
    if (type.name === `File`) {
        return {
            newField: {
                type: GraphQLString,
                args: {
                    myArgument: {
                        type: GraphQLString,
                    }
                },
                resolve: (source, fieldArgs) => {
                    return `Id of this node is ${source.id}.
                    Field was called with argument: ${fieldArgs.myArgument}`
                }
            }
        }
    }

    // by default return empty object
    return {}
}



exports.createPages = async ({ graphql, actions }) => {
    const DecisionPage = path.resolve(`src/templates/DecisionPage.js`)

    const { data: {allDecisionsYaml: {nodes: decisions}}} = await graphql(`
        query MyQuery {
            allDecisionsYaml {
                nodes {
                    slug
                    name
                    subtitle
                    icon
                    treatments
                    decisions
                }
            }
        }
    `);
    const {data:{ allTreatmentsYaml: {nodes: allTreatments}}} = await graphql(`
        query TreatmentsQuery {
            allTreatmentsYaml {
                    nodes {
                    id
                    name
                    duration
                    slug
                    symptoms
                    popularity
                }
            }
        }
    `);




    const treatmentsQuery =
        decisions.forEach((decision) => {
        let treatments = []
        if (decision.treatments && decision.treatments.length){
          treatments = allTreatments.filter(({slug}) => micromatch.isMatch(slug, decision.treatments))
          // tag most popular treament
          mostpopularTreatment = treatments.reduce((mostpopular, treatment)=>{
              if (!mostpopular || ((mostpopular.popularity||0) < (treatment.popularity||0))){
                  return treatment
              }
              return mostpopular

          }, null)
          treatments = treatments.map(t => ({ ...t, mostpopular: t.mostpopular = t.slug === mostpopularTreatment.slug}))
        }
        let choices = []
        if (decision.decisions && decision.decisions.length){
          choices = decision.decisions.map((decisionSlug) => decisions.find(({slug})=> slug === decisionSlug ))
        }
        const parent = decisions.find(d => d.decisions && d.decisions.includes(decision.slug)) || null
        actions.createPage({
                path: `${decision.slug}`,
                component: DecisionPage,
                context: {
                    parent, 
                    decision,
                    choices,
                    treatments,
                }
            })
        })
}
