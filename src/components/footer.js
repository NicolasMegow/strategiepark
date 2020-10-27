/** @jsx jsx */
import PropTypes from "prop-types"
import Emoji from "../components/emoji"
import { Box, Flex, jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer
    sx={{
      mb: 3,
      mt: 3,
    }}
  >
    <Flex>
      <p>
        <strong>{siteTitle}</strong> © {new Date().getFullYear()}, built with{" "}
        <Emoji symbol="🍩" label="love" /> &{` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>.
      </p>
      <Box mx="auto" />
      <div>
        <GatsbyLink to="/impressum">Impressum</GatsbyLink>
        <GatsbyLink to="/datenschutz">Datenschutz</GatsbyLink>
      </div>
    </Flex>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
