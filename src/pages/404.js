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
      <br></br>Fehler 404
    </h1>
    <p>Whoops, da scheint ein Fehler passiert zu sein...</p>
    <Button to="/" as={Link}>
      Zurück zur Startseite
    </Button>
  </Layout>
)

export default NotFoundPage
