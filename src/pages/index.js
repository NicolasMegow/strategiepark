/** @jsx jsx */

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Grid, Box, Flex, Text, jsx } from "theme-ui"
import Emoji from "../components/emoji"

import Strom from "../images/svg/Strom.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Strom width="100%" height="18rem" />
    <h1>Hello world! My name is Nicolas Megow.</h1>
    <Text variant="Subhead">
      Die höchsten Gewinne liegen abseits vom Mainstream.
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
    <h2 sx={{ mt: 4 }}>
      Investitionen in gute Strategie sichert die Zukunft Ihres Unternehmens.
    </h2>
    <Text variant="Subhead">
      Es werden effektive Werkzeuge/ Methoden eingesetzt, um in kürzester Zeit
      optimale Ergebnisse zu erzielen.
      <br></br>
      <strong>— Andreas H. (Geschäftsführer)</strong>
    </Text>
    <Text variant="Subhead">
      Beste Workshops, professionelles Vorgehen und sehr angenehmes
      Zusammenarbeiten. Man kommt stets einen weiteren Schritt vorwärts und
      gewinnt Zeit und Wissen.
      <br></br>
      <strong>— Jörn A. (Geschäftsführer)</strong>
    </Text>
    <Text variant="Subhead">
      Wir haben einen Disrupt Workshop zur Findung innovativer Geschäftsmodelle
      im FinTech/PropTech-Bereich unter Moderation von Nicolas Megow
      durchgeführt. Das hat super geklappt und die Ergebnisse waren
      hervorragend.
      <br></br>
      <strong>— Jens B. (Geschäftsführer)</strong>
    </Text>
  </Layout>
)

export default IndexPage
