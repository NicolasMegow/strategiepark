import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "../components/emoji"
import { Button } from "theme-ui"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>
      <Emoji symbol="😱" label="scream" />
      <br></br>404: Not Found
    </h1>
    <p>Whoops, you just hit a route that doesn't exist... the sadness.</p>
    <Button to="/" as={Link}>
      Go back to the homepage
    </Button>
  </Layout>
)

export default NotFoundPage
