/** @jsx jsx */

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Grid, Box, Flex, Text, jsx } from "theme-ui"
import Emoji from "../components/emoji"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <Emoji symbol="👋" label="waving" />
      <Emoji symbol="🌎" label="world" />
      <br></br>Hello world!
    </h1>
    <Text variant="Subhead">
      This is a Gatsby starter featuring a prebuilt theme from ThemeUI.
    </Text>
    <Grid gap={2} columns={[1, null, 2]} sx={{ mt: 4 }}>
      <Box>
        <h2>Easy customization</h2>
        <p>There are lots of build in easy peasy things.</p>
      </Box>
      <Flex style={{ alignItems: "center", justifyContent: "space-around" }}>
        <span>
          <p>Text</p>
        </span>
      </Flex>
    </Grid>
    <Grid gap={2} columns={[1, null, 2]} sx={{ mt: 4 }}>
      <Box>
        <h2>Easy customization</h2>
        <p>There are lots of build in easy peasy things.</p>
      </Box>
      <Flex style={{ alignItems: "center", justifyContent: "space-around" }}>
        <span>
          <h2>Easy customization</h2>
          <p>There are lots of build in easy peasy things.</p>
        </span>
      </Flex>
    </Grid>
  </Layout>
)

export default IndexPage
