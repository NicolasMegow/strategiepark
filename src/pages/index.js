/** @jsx jsx */

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Grid, Box, Flex, Text, jsx } from "theme-ui"

import Strom from "../images/svg/Strom.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Strom width="100%" height="18rem" />
    <Box sx={{ maxWidth: "56rem" }}>
      <h1>
        Business Coaching<br></br>für Menschen mit ungewöhnlichen Ideen.
      </h1>
      <Text variant="Subhead">
        Die höchsten Gewinne liegen abseits vom Mainstream. Der Weg dahin ist
        entsprechend steinig. Seit 2014 stärke ich Menschen auf solchen Wegen.
      </Text>
    </Box>
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
    <h2 sx={{ mt: 4 }}>Meine Referenzen</h2>
    <Box sx={{ maxWidth: "48rem" }}>
      <p>
        Es werden effektive Werkzeuge/ Methoden eingesetzt, um in kürzester Zeit
        optimale Ergebnisse zu erzielen.
        <br></br>
        <strong>— Andreas H. (Geschäftsführer)</strong>
      </p>
      <p>
        Beste Workshops, professionelles Vorgehen und sehr angenehmes
        Zusammenarbeiten. Man kommt stets einen weiteren Schritt vorwärts und
        gewinnt Zeit und Wissen.
        <br></br>
        <strong>— Jörn A. (Geschäftsführer)</strong>
      </p>
      <p>
        Wir haben einen Disrupt Workshop zur Findung innovativer
        Geschäftsmodelle im FinTech/PropTech-Bereich unter Moderation von
        Nicolas Megow durchgeführt. Das hat super geklappt und die Ergebnisse
        waren hervorragend.
        <br></br>
        <strong>— Jens B. (Geschäftsführer)</strong>
      </p>
    </Box>
  </Layout>
)

export default IndexPage
