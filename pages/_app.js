import '../styles/globals.css';

import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rifqi - Senior Backend Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0e1416" />
        <meta name="description" content="Modern portfolio of Muhammad Rifqi, senior backend engineer." />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
