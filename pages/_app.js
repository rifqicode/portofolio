import '../styles/globals.css'

import Head from 'next/head'
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }) {
  return <main>
      <Head>
        <title> Rifqi - CV </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
      </Head>
      <Component {...pageProps} /> 
    </main>
}

export default MyApp
