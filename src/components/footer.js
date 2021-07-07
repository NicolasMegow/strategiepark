/** @jsx jsx */
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Flex, jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

const Footer = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      favicon: file(relativePath: { eq: "Favicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <footer
      sx={{
        mb: 3,
        mt: 3,
      }}
    >
      <Flex>
        <div>
          <Img
            fluid={data.favicon.childImageSharp.fluid}
            alt="Strategiepark Elefant"
            style={{
              width: "2rem",
              height: "2rem",
              margin: ".5rem 0",
            }}
          />

          <a href="mailto:Coaching@Strategiepark.de">
            <strong>Coaching@Stragiepark.de</strong>
          </a>
          <p>
            {siteTitle} © {new Date().getFullYear()}
            <br></br>
            <GatsbyLink to="/impressum">Impressum</GatsbyLink> |{" "}
            <GatsbyLink to="/datenschutz">Datenschutz</GatsbyLink>
          </p>
        </div>
      </Flex>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
