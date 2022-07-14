import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <title>youtube-clone</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
