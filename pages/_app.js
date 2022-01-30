import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import NavHeader from "../src/components/nav-header";
import Footer from "../src/components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GPE Pesquisa | Plataforma online de gestão de Pesquisa</title>
        <meta
          property="og:title"
          content="GPE Pesquisa | Plataforma online de gestão de Pesquisa"
        />
        <meta
          name={"description"}
          content={
            "Como criamos o nosso próprio sistema para solucionar os desafios que o mercado de pesquisas possui."
          }
        />
        <meta
          name="facebook-domain-verification"
          content="9e76723u54bw4tuj1cj1pwndnma2wc"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
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
      <div>
        <NavHeader />
        <div className={"relative"}>
          <div className={"min-h-screen flex flex-col"}>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
