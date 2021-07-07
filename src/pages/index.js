/** @jsx jsx */
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Grid, Box, Flex, Text, jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
    imageVisuals: file(relativePath: { eq: "GraphicRecording.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageWorkshop: file(relativePath: { eq: "StartupWorkshop.jpg" }) {
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
    <SEO title="Coaching für Innovationsprojekte" />
    <Grid gap={3} columns={[1, null, 2]} sx={{ mt: 4 }}>
      <Box sx={{ maxWidth: "56rem" }}>
        <h1>
          Coaching<br></br>für Innovationsprojekte.
        </h1>
        <Text variant="Subhead">
          Die interessanten Chancen liegen jenseits des Status Quo. Seit 2014
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
            borderRadius: "10%",
            margin: "1rem",
          }}
        />
      </Flex>
    </Grid>

    <RefRow />
    <Box sx={{ maxWidth: "56rem", mt: 4 }}>
      <h2>Here’s to the crazy ones!</h2>
      <p>
        Innovationsprojekte sind eine Kombination aus kognitivem Marathon und
        emotionaler Achterbahnfahrt. Da ist ein wenig Unterstützung völlig
        normal. Als Coach stärke ich Führungskräfte und Teams dabei Innovationen
        schnell und erfolgreich in den Markt zu bringen.
      </p>
    </Box>
    <Grid gap={3} columns={[1, null, 3]} sx={{ mt: 2 }}>
      <Box>
        <h3>
          <FontAwesomeIcon icon={["fas", "shipping-fast"]} size="lg" />
          <br></br>Agil arbeiten
        </h3>
        <p>
          Chancen strukturieren<br></br>Prototypen entwicklen<br></br>
          Marktexperimente durchführen
        </p>
      </Box>
      <Box>
        <h3>
          <FontAwesomeIcon icon={["fas", "route"]} size="lg" />
          <br></br>Entscheider einbinden
        </h3>
        <p>
          Erwartungen steuern
          <br></br>Hindernisse beseitigen
          <br></br>Rückschläge nutzen
        </p>
      </Box>
      <Box>
        <h3>
          <FontAwesomeIcon icon={["fas", "charging-station"]} size="lg" />
          <br></br>Teams entfesseln
        </h3>
        <p>
          Unsicherheit aushalten<br></br>Stärken entwickeln<br></br>Ausgleich
          schaffen
        </p>
      </Box>
    </Grid>
    <Grid gap={3} columns={[1, null, 2]} sx={{ mt: 4 }}>
      <Box>
        <h2>Hilfe zur Selbsthilfe</h2>
        <p></p>
        <ul>
          <li>
            <h3>1. Kostenloses Kennenlernen</h3>
            <p>
              Unser Start ist komplett unverbindlich. Wir gucken in einer
              Stunde, ob die Chemie stimmt und wie ich dich bei der Erreichung
              deiner Ziele unterstützen kann.
            </p>
          </li>
          <li>
            <h3>2. Coaching-Stunde(n)</h3>
            <p>
              In der Regel treffen wir uns für 1-2 Stunden, gerne komplett
              online. Bei Bedarf können wir auch Tagesworkshops oder komplette
              Wochensprints durchführen.
            </p>
          </li>
          <li>
            <h3>3. Automatisiertes Feedback</h3>
            <p>
              Im Nachgang zu jedem Coaching erhältst du einen kurzen Fragebogen.
              Der Fragebogen hilft dir zu das Coaching zu reflektieren und gibt
              mir Feedback zur Verbesserung.
            </p>
          </li>
        </ul>
      </Box>
      <Flex style={{ alignItems: "center", justifyContent: "center" }}>
        <Stärkungen width="100%" height="18rem" />
      </Flex>
    </Grid>
    <Box sx={{ maxWidth: "56rem", mt: 4 }}>
      <h2>Kurz zu mir: Ich bin Nicolas.</h2>
      <p>
        Ich arbeite täglich an mir, um besser zu werden. Dabei probiere ich
        durchaus unkonventionelle Wege aus.
      </p>
    </Box>
    <Strom width="100%" height="24rem" />
    <Grid gap={3} columns={[1, null, 3]}>
      <Box>
        <h3>Ich denke langfristig.</h3>
        <p>
          Nachhaltige Veränderung braucht Zeit, weil sie von innen heraus
          wächst. Dafür stehe ich als Coach und als Gärtner. Mein Weg begann
          2005 und geht noch mindestens 3 Jahrzehnte. Inzwischen umfasst meine
          Sammlung über 200 handverlesene Sachbücher.
        </p>
      </Box>
      <Box>
        <h3>Ich arbeite agil.</h3>
        <p>
          Aktuell<br></br>
          <a
            href="https://prof-schumann.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            SCHUMANN
          </a>
          : Scrum Master für 3 Squads<br></br>
          <a
            href="https://crewsby.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crewsby
          </a>
          : Entwicklung eines Softwareprodukts<br></br>
        </p>
        <p>
          Davor<br></br>
          <a
            href="https://garage33.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            garage33
          </a>
          : Innovationsquartier für Mittelständler<br></br>
          <a href="https://tecup.de" target="_blank" rel="noopener noreferrer">
            TecUP
          </a>
          : Neugestaltung der Gründerförderung
        </p>
      </Box>
      <Box>
        <h3>Ich coache professionell.</h3>
        <p>
          2009 fing ich an zu coachen, um einer Freundin zu helfen. Seitdem habe
          ich Ausbildungen zum Business Coach & Trainer absolviert. Dazu kommen
          Weiterbildungen als Scrum Master, Visual Facilitator, Graphic Recorder
          & Facilitator für LEGO Serious Play.
        </p>
      </Box>
    </Grid>
    <Box sx={{ maxWidth: "56rem", mt: 4 }}>
      <h2>200€ pro Stunde, min. 6 Stunden (zzgl. USt.)</h2>
      <p>
        Mir ist es sehr wichtig mein Geschäftsmodell klar zu kommunizieren: Den
        Marathon und die Achterbahnfahrt musst du selbst bestehen. Daran kann
        ich nichts ändern. Aber es gibt genügend Möglichkeiten zur
        Unterstützung. Wie meine Hilfe konkret aussieht und wie lange wir
        zusammenarbeiten klären wir gemeinsam - natürlich mit regelmäßiger
        Anpassung an deinen Bedarf.
      </p>
    </Box>
    <Grid gap={3} columns={[1, null, 2]} sx={{ mt: 2 }}>
      <Box>
        <Img
          fluid={data.imageWorkshop.childImageSharp.fluid}
          alt="StartupWorkshop"
          style={{
            width: "20rem",
            height: "20rem",
            borderRadius: "10%",
            margin: "2rem 0rem",
          }}
        />
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
          Man merkt, dass Nicolas über langjährige Erfahrung im Team-Coaching
          verfügt. Dadurch war er in der Lage in kurzer Zeit ein sehr gutes
          Gefühl für die relevanten Themen zu bekommen, an welchen für die
          Weiterentwicklung unseres neu formierten Teams gearbeitet werden
          musste. [...]
          <br></br>
          <strong>— André (Führungskraft)</strong>
        </p>
      </Box>
      <Box>
        <Img
          fluid={data.imageVisuals.childImageSharp.fluid}
          alt="Graphic Recording"
          style={{
            width: "20rem",
            height: "20rem",
            borderRadius: "10%",
            margin: "2rem 0rem",
          }}
        />
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
          Nicolas durchgeführt. Das hat super geklappt und die Ergebnisse waren
          hervorragend.
          <br></br>
          <strong>— Jens (Geschäftsführer)</strong>
        </p>
      </Box>
    </Grid>
  </Layout>
)

export default IndexPage
