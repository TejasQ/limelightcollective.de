import Document, { Html, Head, Main, NextScript } from "next/document";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";

import globalStyles from "../util/globalStyles";

const Content = styled.main``;

class MyDocument extends Document {
  render() {
    return (
      <>
        <Global styles={globalStyles} />
        <Html lang="en">
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preload" as="image" href="/images/arts-hover.png"></link>
            <link rel="preload" as="image" href="/images/space-hover.png"></link>
            <link rel="preload" as="image" href="/images/community-hover.png"></link>
          </Head>
          <body>
            <Content>
              <Main />
            </Content>
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}

export default MyDocument;
