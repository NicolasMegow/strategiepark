/** @jsx jsx */
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      <Box>
        <a
          href={`https://www.linkedin.com/company/crewsby/`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" fixedWidth />
        </a>
        <a
          href={`https://twitter.com/crewsbyteams`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Twitter"
        >
          <FontAwesomeIcon
            icon={["fab", "twitter-square"]}
            size="2x"
            fixedWidth
          />
        </a>
      </Box>
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
