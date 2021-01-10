import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Grid } from "theme-ui"

const RefRow = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "references" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  if (!data) {
    return <div>References not found</div>
  }
  return (
    <Grid gap={2} columns={[2, 4, 8]} sx={{ mt: 4 }}>
      {data.allFile.edges.map((ref, i) => {
        return (
          <Img
            fluid={ref.node.childImageSharp.fluid}
            key={i}
            alt={`Reference#${i}`}
            style={{
              width: "7.5rem",
              height: "5rem",
              margin: ".5rem",
            }}
          />
        )
      })}
    </Grid>
  )
}

export default RefRow
