/** @jsx jsx */
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Grid, Box, Flex, Text, jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Emoji from "../components/emoji"

import Strom from "../images/svg/Strom.svg"
import RefRow from "../components/ref-row"
import Stärkungen from "../images/svg/Stärkungen.svg"

export const query = graphql`
  query {
    imageNicolas: file(relativePath: { eq: "NicolasMegow.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Business Coaching" />
    <Grid gap={3} columns={[1, null, 2]} sx={{ mt: 4 }}>
      <Box sx={{ maxWidth: "56rem" }}>
        <h1>
          Business Coaching<br></br>für Menschen mit ungewöhnlichen Ideen.
        </h1>
        <Text variant="Subhead">
          Die interessanten Chancen liegen abseits vom Mainstream. Seit 2014
          stärke ich Menschen, die tolle Unternehmen noch besser machen.
        </Text>
      </Box>
      <Flex style={{ alignItems: "center", justifyContent: "center" }}>
        <Img
          fluid={data.imageNicolas.childImageSharp.fluid}
          alt="Nicolas Megow"
          style={{
            width: "20rem",
            height: "20rem",
            borderRadius: "50%",
            margin: "1rem",
          }}
        />
      </Flex>
    </Grid>

    <RefRow />
    <Box sx={{ maxWidth: "56rem", mt: 4 }}>
      <h2>Here’s to the crazy ones!</h2>
      <p>
        Neue Wege zu gehen ist eine Mischung aus kognitivem Marathon und
        emotionaler Achterbahnfahrt. Da kann ein wenig Unterstützung nicht
        schaden.
      </p>
    </Box>
    <Grid gap={3} columns={[1, null, 3]} sx={{ mt: 2 }}>
      <Box>
        <h3>
          <FontAwesomeIcon icon={["fas", "radar"]} size="lg" />
          <br></br>Chancen strukturieren
        </h3>
        <p></p>
      </Box>
      <Box>
        <h3>
          <FontAwesomeIcon icon={["fas", "charging-station"]} size="lg" />
          <br></br>Ausgleich schaffen
        </h3>
        <p>Bewusst Abschalten und Energie tanken</p>
      </Box>
      <Box>
        <h3>
          <FontAwesomeIcon icon={["fas", "map-marker-check"]} size="lg" />
          <br></br>Erwartungen steuern
        </h3>
        <p>Potenziale realistisch kommunizieren</p>
      </Box>
      <Box>
        <h3>
          <FontAwesomeIcon icon={["fas", "map-signs"]} size="lg" />
          <br></br>Rückschläge nutzen
        </h3>
        <p>Innehalten und neu aufstellen</p>
      </Box>
      <Box>
        <h3>
          <FontAwesomeIcon icon={["fas", "unlock-alt"]} size="lg" />
          <br></br>Teams entfesseln
        </h3>
        <p>Teamarbeit zum Selbstläufer machen</p>
      </Box>
      <Box>
        <h3>
          <FontAwesomeIcon icon={["fas", "truck-plow"]} size="lg" />
          <br></br>Hindernisse beseitigen
        </h3>
        <p></p>
      </Box>
      <Box>
        <h3>
          <FontAwesomeIcon icon={["fas", "shoe-prints"]} size="lg" />
          <br></br>Geduld üben
        </h3>
        <p></p>
      </Box>
    </Grid>
    <Grid gap={3} columns={[1, null, 2]} sx={{ mt: 4 }}>
      <Box>
        <h2>Hilfe zur Selbsthilfe</h2>
        <p>
          <ol>
            <li>
              <h3>Kostenloses Kennenlernen.</h3>
            </li>
            <li>
              <h3>Coaching-Stunde(n)</h3>
            </li>
            <li>
              <h3>Automatisiertes Feedback</h3>
            </li>
          </ol>
        </p>
      </Box>
      <Flex style={{ alignItems: "center", justifyContent: "center" }}>
        <Stärkungen width="100%" height="18rem" />
      </Flex>
    </Grid>
    <Box sx={{ maxWidth: "56rem", mt: 4 }}>
      <h2>Kurz zu mir: Ich bin Nicolas.</h2>
      <p>
        Ich arbeite täglich an mir, um besser zu werden. Dabei komme ich ganz
        gut voran, mache aber auch Fehler.{" "}
      </p>
    </Box>
    <Strom width="100%" height="24rem" />
    <Grid gap={3} columns={[1, null, 3]}>
      <Box>
        <h3>Ich bin ein professioneller Coach.</h3>
        <p>
          Schwerpunkt im Studium: die Steuerung von Unternehmen. Ausgebildeter
          Business Coach & Trainer. Scrum Master. Aktiv als Lean Startup
          Ambassador.
        </p>
        <p>→ Aber meine Promotion ist nach 6 Jahren noch nicht fertig.</p>
      </Box>
      <Box>
        <h3>Ich mache Zusammenhänge sichtbar.</h3>
        <p>
          Visual Facilitator & Graphic Recorder. Gerne auch handfest mit LEGO
          Serious Play.
        </p>
        <p>→ Und ich habe sehr lange geübt bevor meine Schrift lesbar wurde.</p>
      </Box>
      <Box>
        <h3>Ich gehe selber neue Wege.</h3>
        <p>TecUP, garage33, Crewsby.</p>
        <p>→ Trotzdem habe ich aus Gier ca 8.000€ verzockt.</p>
      </Box>
    </Grid>
    <Box sx={{ maxWidth: "56rem", mt: 4 }}>
      <h2>180€ pro Stunde, min. 6 Stunden (zzgl. USt.)</h2>
      <p>
        Mir ist es sehr wichtig mein Geschäftsmodell klar zu kommunizieren: Du
        musst deinen Weg selber gehen. Daran kann ich nichts ändern. Aber es
        gibt in der Regel genügend Ansatzpunkte für Unterstützung. Wie meine
        Hilfe konkret aussieht und wie lange wir zusammenarbeiten klären wir
        gemeinsam.
      </p>
    </Box>
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
