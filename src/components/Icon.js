import React from "react"
import { useStaticQuery } from "gatsby"

export default ({ name = "medical-notes", color='white', ...rest }) => {
  const icons = useStaticQuery(graphql`
    query WhiteIconsQuery {
      primary: allFile(filter: { relativePath: { glob: "icns/primary/*" } }) {
        nodes {
          name
          publicURL
        }
      }
      white: allFile(filter: { relativePath: { glob: "icns/white/*" } }) {
        nodes {
          name
          publicURL
        }
      }
    }
  `)

  const icon = icons[color].nodes.find(icon => name === icon.name)

  return <img src={icon.publicURL} {...rest} />
}
