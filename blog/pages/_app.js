import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

// * Components
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Header */}
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>
      {/* ============= */}
      {/* NAVBAR */}
      <Navbar />
      {/* ========= */}
      <Component {...pageProps} /> <footer>THIS IS FOOTER</footer>
      {/* SCRIPT  */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></Script>
      {/* ===================== */}
    </>
  );
}

export default MyApp;
