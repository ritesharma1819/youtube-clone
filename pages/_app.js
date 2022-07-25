import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <title>youtube-clone</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
