/** @jsx jsx */
import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Box, Flex, Text, jsx } from "theme-ui";

const Header = () => (
  <header
    sx={{
      mb: 2,
    }}
  >
    <Flex sx={{ pt: 2, pb: 2, alignItems: "center" }}>
      <GatsbyLink to="/">
        <Text variant="logo">{"Strategiepark"}</Text>
      </GatsbyLink>
      <Box mx="auto" />
      <Box>
        <a
          href={`https://www.linkedin.com/in/nicolas-megow/`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" fixedWidth />
        </a>
      </Box>
    </Flex>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
