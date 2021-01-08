/** @jsx jsx */

import Layout from "../components/layout"
import SEO from "../components/seo"

import { jsx } from "theme-ui"
import Emoji from "../components/emoji"

const ImpressumPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Impressum</h1>
    <p>
      Dieses Impressum wurde von weiteren von mir betriebenen Seiten verlinkt
      und gilt deshalb auch für folgende Dienste:<br></br>–
      twitter.com/nicolasmegow<br></br>– xing.com/profile/nicolas_megow<br></br>
      – linkedin.com/in/nicolas-megow<br></br>– youtube.com/c/NicolasMegow
    </p>

    <h2>Verantwortlich für sämtliche Inhalte</h2>
    <p>Nicolas Megow</p>
    <h3>Adresse</h3>
    <p>
      Strategiepark UG (haftungsbeschränkt)<br></br>
      Arndtstrasse 26<br></br>
      33100 Paderborn
    </p>
    <h3>Kontakt</h3>
    <p>info@strategiepark.de</p>
    <h3>Registereintrag</h3>
    <p>
      Eingetragen im Handelsregister, Amtsgericht Paderborn auf dem HRB 12803.
      <br></br>
      Umsatzsteuer-Identifikationsnummer DE311728934
    </p>
    <h3>Urheberrecht</h3>
    <p>
      Den Elefanten im Logo verdanke ich Christian Ströher von den
      Markenliebhabern. <br></br>Als Icons verwende ich die wunderbaren Font
      Awesome Icons von Dave Gandy.
    </p>

    <h2>Online-Streitbeilegung</h2>
    <p>
      Die Europäische Kommission stellt eine Plattform zur
      Online-Streitbeilegung (OS) bereit: <br></br>
      http://ec.europa.eu/consumers/odr
      <br></br>Meine E-Mail-Adresse finden Sie oben im Impressum. <br></br>Ich
      bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle teilzunehmen.
    </p>
  </Layout>
)

export default ImpressumPage
