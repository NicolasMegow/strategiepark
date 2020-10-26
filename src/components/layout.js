import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Box } from "theme-ui"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
