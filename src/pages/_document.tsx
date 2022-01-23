import Document, { Html, Head, NextScript, Main } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  //@ts-ignore
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          //@ts-ignore
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Roboto:ital,wght@0,400;0,700;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <NextScript />
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
