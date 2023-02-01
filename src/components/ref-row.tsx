import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Grid } from "theme-ui";

const RefRow = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "references" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);
  if (!data) {
    return <div>References not found</div>;
  }

  return (
    <Grid gap={2} columns={[2, 4, 8]} sx={{ mt: 4 }}>
      {data.allFile.edges.map((edge: any, i: string) => {
        const image = getImage(edge.node.childImageSharp);
        return (
          <GatsbyImage
            image={image}
            alt={`Reference#${i}`}
            key={i}
            style={{
              width: "6rem",
              height: "4rem",
              margin: ".5rem",
            }}
          />
        );
      })}
    </Grid>
  );
};

export default RefRow;
