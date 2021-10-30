import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <link
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
              rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
