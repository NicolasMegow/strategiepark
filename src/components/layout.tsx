import "@fortawesome/fontawesome-svg-core/styles.css";

import * as React from "react";
import PropTypes from "prop-types";
import { graphql, PageProps } from "gatsby";

import { Box } from "theme-ui";
import Header from "./header";
import Footer from "./footer";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";

config.autoAddCss = false;
library.add(fab);
library.add(fas);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        pl: 3,
        pr: 3,
      }}
    >
      <Header />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
