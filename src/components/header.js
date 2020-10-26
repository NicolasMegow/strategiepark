/** @jsx jsx */
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"

import { Box, Flex, Link, jsx } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      mb: 2,
    }}
  >
    <Flex sx={{ pt: 2, pb: 2, alignItems: "center" }}>
      <Link to="/" as={GatsbyLink} variant="logo">
        {" "}
        {siteTitle}
      </Link>

      <Box mx="auto" />
      <Link as={GatsbyLink} variant="nav" to="/more-features">
        + More Features
      </Link>
      <Link variant="nav" href="/more-features">
        View source
      </Link>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
