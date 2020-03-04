import Document, { Html, Head, Main, NextScript } from "next/document";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";

import globalStyles from "../components/globalStyles";

const Content = styled.main``;

class MyDocument extends Document {
  render() {
    return (
      <>
        <Global styles={globalStyles} />
        <Html lang="en">
          <Head></Head>
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
