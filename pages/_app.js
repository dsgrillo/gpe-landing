import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import NavHeader from "../src/components/nav-header";
import Footer from "../src/components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
          rel="stylesheet"
        />
      </Head>
      <NavHeader />
      <div className={"pt-24"}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
