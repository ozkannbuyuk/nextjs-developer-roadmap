import Head from "next/head";
import GlobalStyle from "/components/atoms/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <title>Next.js - Developer Roadmap</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
