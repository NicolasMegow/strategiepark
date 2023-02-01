/** @jsx jsx */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";

import { Flex, jsx } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

const Footer = () => {
  return (
    <footer
      sx={{
        mb: 3,
        mt: 3,
      }}
    >
      <Flex>
        <div>
          <StaticImage
            src="../images/Favicon.png"
            alt="Strategiepark Elefant"
            style={{
              width: "3rem",
              height: "3rem",
              margin: ".5rem 0",
            }}
          />
          <br></br>
          <a href="mailto:Nicolas@Strategiepark.de">
            <strong>Nicolas@Stragiepark.de</strong>
          </a>
          <p>
            {"Strategiepark"} © {new Date().getFullYear()}
            <br></br>
            <GatsbyLink to="/impressum">Impressum</GatsbyLink> |{" "}
            <GatsbyLink to="/datenschutz">Datenschutz</GatsbyLink>
          </p>
        </div>
      </Flex>
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
