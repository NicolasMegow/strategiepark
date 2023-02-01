/** @jsx jsx */
import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

import { Grid, Box, Flex, Text, jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Strom from "../images/svg/Strom.svg";
import RefRow from "../components/ref-row";
import Stärkungen from "../images/svg/Stärkungen.svg";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Grid gap={3} columns={[1, null, 2]} sx={{ mt: 4 }}>
        <Box sx={{ maxWidth: "56rem" }}>
          <h1 sx={{ mt: 4 }}>Lean Startup Training</h1>
          <Text variant="subhead">
            Die interessanten Chancen sind jenseits des Status Quo. Seit 2014
            stärke ich Menschen, die tolle Unternehmen noch besser machen.
          </Text>
        </Box>
        <Flex style={{ alignItems: "center", justifyContent: "center" }}>
          <StaticImage
            src="../images/NicolasMegow.jpg"
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
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Text variant="subhead">
          Man merkt, dass Nicolas über langjährige Erfahrung im Team-Coaching
          verfügt. Dadurch war er in der Lage in kurzer Zeit ein sehr gutes
          Gefühl für die relevanten Themen zu bekommen, an welchen für die
          Weiterentwicklung unseres neu formierten Teams gearbeitet werden
          musste. [...]
          <br></br>
          <strong>— André (Führungskraft)</strong>
        </Text>
      </Box>
      <Box sx={{ maxWidth: "56rem", mt: 4 }}>
        <h2>Neue Produkte schnell und erfolgreich.</h2>
        <p>
          Strukturiertes Testen von Hypothesen sind der Schlüssel zu
          Geschwindigkeit und Erfolg in der Produktentwicklung.
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
      <Box sx={{ maxWidth: "56rem", mt: 4 }}>
        <h2>Hilfe zur Selbsthilfe.</h2>
        <p>
          Mein Training dreht sich komplett um deine Weiterentwicklung. Ich
          freue mich dabei helfen zu können, arbeite dabei aber zielstrebig
          darauf hin nicht mehr gebraucht zu werden.
        </p>
      </Box>
      <Grid gap={3} columns={[1, null, 2]} sx={{ mt: 1 }}>
        <Box>
          <ul>
            <li>
              <h3>1. Trainings</h3>
              <p>
                Neben dem Einstieg die die Produktentwicklung mit Lean Startup
                biete ich Vertiefungstrainings zu den Themen Prototyping und
                Jobs To Be Done für 10-20 Lernende.
              </p>
            </li>
            <li>
              <h3>2. Lerngruppen</h3>
              <p>
                Lerngruppen ermöglichen das Erlernen von Product Discovery
                Fähigkeiten im Arbeitsalltag. Jede Lerngruppe besteht aus 3-4
                Lernenden und trifft sich 6 Monate lang wöchentlich für 2x 1
                Stunde.
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
      <Grid gap={3} columns={[1, null, 2]}>
        <Box>
          <h3>Ich trainiere spielerisch.</h3>
          <p>
            Mit Übungen und Spielen schaffe ich einzigartige Lernerfahrungen.
            Diese runde ich mit Echtzeitvisualisierungen ab.
          </p>
          <h3>Ich arbeite selbst agil seit 2014.</h3>
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
            : Ressourcen für DIY Teambuilding <br></br>
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
            <a
              href="https://tecup.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              TecUP
            </a>
            : Neugestaltung der Gründerförderung
          </p>
        </Box>
        <Box>
          <StaticImage
            src="../images/StartupWorkshop.jpg"
            alt="StartupWorkshop"
            style={{
              width: "20rem",
              height: "20rem",
              borderRadius: "10%",
              margin: "2rem 0rem",
            }}
          />{" "}
        </Box>
      </Grid>
      <Grid gap={3} columns={[1, null, 2]} sx={{ mt: 2 }}>
        <Box>
          <StaticImage
            src="../images/GraphicRecording.jpeg"
            alt="Graphic Recording"
            style={{
              width: "20rem",
              height: "20rem",
              borderRadius: "10%",
              margin: "2rem 0rem",
            }}
          />
        </Box>
        <Box>
          <p>
            Super war die intensive Betreuung und Gegensteuerung des Prozesses,
            dies hat den Erfolg abgesichert.
            <br></br>
            <strong>— Günter (Führungskraft)</strong>
          </p>
          <p>
            Es werden effektive Werkzeuge/ Methoden eingesetzt, um in kürzester
            Zeit optimale Ergebnisse zu erzielen.
            <br></br>
            <strong>— Andreas (Geschäftsführer)</strong>
          </p>
          <p>
            Beste Workshops, professionelles Vorgehen und sehr angenehmes
            Zusammenarbeiten. Man kommt stets einen weiteren Schritt vorwärts
            und gewinnt Zeit und Wissen.
            <br></br>
            <strong>— Jörn (Geschäftsführer)</strong>
          </p>
          <p>
            Wir haben einen Disrupt Workshop zur Findung innovativer
            Geschäftsmodelle im FinTech/PropTech-Bereich unter Moderation von
            Nicolas durchgeführt. Das hat super geklappt und die Ergebnisse
            waren hervorragend.
            <br></br>
            <strong>— Jens (Geschäftsführer)</strong>
          </p>
        </Box>
      </Grid>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Lean Startup Training</title>;
