/** @jsx jsx */
import PropTypes from "prop-types"
import Emoji from "../components/emoji"
import { Box, Flex, jsx } from "theme-ui"

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
      <p>Secret placeholder</p>
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
