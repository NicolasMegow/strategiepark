/** @jsx jsx */

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Grid, Box, Flex, Text, jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Strom from "../images/svg/Strom.svg"
import RefRow from "../components/ref-row"

const IndexPage = () => (
  <Layout>
    <SEO title="Business Coaching" />
    <Strom width="100%" height="18rem" />
    <Box sx={{ maxWidth: "56rem" }}>
      <h1>
        Business Coaching<br></br>für Menschen mit ungewöhnlichen Ideen.
      </h1>
      <Text variant="Subhead">
        Die interessanten Chancen liegen abseits vom Mainstream. Seit 2014
        stärke ich Menschen, die tolle Unternehmen noch besser machen.
      </Text>
    </Box>
    <RefRow />
    <Box sx={{ maxWidth: "56rem", mt: 4 }}>
      <h2>Here’s to the crazy ones!</h2>
      <p>
        In Unternehmen neue Wege zu gehen ist eine Mischung aus kognitivem
        Marathon und emotionaler Achterbahnfahrt. Da kann ein wenig Hilfe nicht
        schaden.
      </p>
    </Box>
    <Grid gap={3} columns={[1, null, 3]} sx={{ mt: 2 }}>
      <Box>
        <h3>Chancen strukturieren</h3>
        <p></p>
      </Box>
      <Box>
        <h3>Ausgleich schaffen</h3>
        <p>Bewusst Abschalten und Energie tanken</p>
      </Box>
      <Box>
        <h3>Erwartungen steuern</h3>
        <p>Potenziale realistisch kommunizieren</p>
      </Box>
      <Box>
        <h3>Rückschläge nutzen</h3>
        <p>Innehalten und neu aufstellen</p>
      </Box>
      <Box>
        <h3>Teams entfesseln</h3>
        <p>Teamarbeit zum Selbstläufer machen</p>
      </Box>
      <Box>
        <h3>Hindernisse beseitigen</h3>
        <p></p>
      </Box>
      <Box>
        <h3>Geduld üben</h3>
        <p></p>
      </Box>
    </Grid>
    <Grid gap={3} columns={[1, null, 2]} sx={{ mt: 4 }}>
      <Box>
        <h2>Hilfe zur Selbsthilfe</h2>
        <p>There are lots of build in easy peasy things.</p>
      </Box>
      <Flex style={{ alignItems: "center", justifyContent: "center" }}>
        <FontAwesomeIcon
          icon={["fas", "bow-arrow"]}
          size="3x"
          fixedWidth
          color="#035aa6"
        />
        <strong sx={{ ml: 3, mr: 3 }}> statt </strong>
        <FontAwesomeIcon
          icon={["fas", "fish-cooked"]}
          size="3x"
          fixedWidth
          color="#E0E0E0"
        />
      </Flex>
    </Grid>
    <h2 sx={{ mt: 4 }}>Leistungsversprechen</h2>
    <p>
      Ich verspreche dir, dass ich mich voll für dich und deine Ziele einsetze.
    </p>
    <Grid gap={3} columns={[1, null, 2]} sx={{ mt: 2 }}>
      <Box>
        <p>
          Super war die intensive Betreuung und Gegensteuerung des Prozesses,
          dies hat den Erfolg abgesichert.
          <br></br>
          <strong>— Günter (Führungskraft)</strong>
        </p>
        <p>
          Sehr hilfreiche Impulse, die mich persönlich voran gebracht haben und
          mir geholfen haben die Prioritäten neu zu ordnen.
          <br></br>
          <strong>— Carolin (Führungskraft)</strong>
        </p>
        <p>
          Man merkt, dass Hr. Megow über langjährige Erfahrung im Team-Coaching
          verfügt. Dadurch war er in der Lage in kurzer Zeit ein sehr gutes
          Gefühl für die relevanten Themen zu bekommen, an welchen für die
          Weiterentwicklung unseres neu formierten Teams gearbeitet werden
          musste. [...]
          <br></br>
          <strong>— André (Führungskraft)</strong>
        </p>
      </Box>
      <Box>
        <p>
          Es werden effektive Werkzeuge/ Methoden eingesetzt, um in kürzester
          Zeit optimale Ergebnisse zu erzielen.
          <br></br>
          <strong>— Andreas (Geschäftsführer)</strong>
        </p>
        <p>
          Beste Workshops, professionelles Vorgehen und sehr angenehmes
          Zusammenarbeiten. Man kommt stets einen weiteren Schritt vorwärts und
          gewinnt Zeit und Wissen.
          <br></br>
          <strong>— Jörn (Geschäftsführer)</strong>
        </p>
        <p>
          Wir haben einen Disrupt Workshop zur Findung innovativer
          Geschäftsmodelle im FinTech/PropTech-Bereich unter Moderation von
          Nicolas Megow durchgeführt. Das hat super geklappt und die Ergebnisse
          waren hervorragend.
          <br></br>
          <strong>— Jens (Geschäftsführer)</strong>
        </p>
      </Box>
    </Grid>
  </Layout>
)

export default IndexPage
