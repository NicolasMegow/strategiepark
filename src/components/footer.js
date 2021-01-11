/** @jsx jsx */
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Emoji from "../components/emoji"
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
          <p>
            <strong>{siteTitle}</strong> © {new Date().getFullYear()}, built
            with <Emoji symbol="🍩" label="love" /> &{` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>.<br></br>
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
