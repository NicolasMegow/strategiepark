import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "../components/emoji"
import { Button, Text } from "theme-ui"

const FeaturePage = () => (
  <Layout>
    <SEO title="More features" />
    <h1>
      <Emoji symbol="🧰" label="tools" />
      <Emoji symbol="🤯" label="blown-away" />
      <br></br>More Features!
    </h1>
    <Text variant="Subhead">
      Actually, these are the features from the gatsby-starter-default upon
      which this starter is built.
    </Text>
    <h2>Check out these awesome features:</h2>
    <ul>
      <li>Comes with React Helmet for adding site meta tags</li>
      <li>Includes plugins for offline support out of the box</li>
    </ul>
    <Button to="/" as={Link}>
      Go back to the homepage
    </Button>
  </Layout>
)

export default FeaturePage
