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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7W7YVP1YNE"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-7W7YVP1YNE');`,
          }}
        ></script>
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
