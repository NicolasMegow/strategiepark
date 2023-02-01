import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";
import Emoji from "../components/emoji";
import { Button } from "theme-ui";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>
        <Emoji symbol="😱" label="scream" />
        <br></br>Fehler 404
      </h1>
      <p>Whoops, da scheint ein Fehler passiert zu sein...</p>
      <Link to="/">
        <Button>Zurück zur Startseite</Button>
      </Link>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 Not found</title>;
