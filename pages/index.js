import Head from 'next/head';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Skill from '../components/Skill';
import Work from '../components/Work';
import Biodata from '../components/Biodata';
import Project from '../components/Project';

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Rifqi - Senior Backend Engineer Portfolio</title>
        <meta
          name="description"
          content="Portfolio Muhammad Rifqi - Senior Backend Engineer focused on scalable backend systems, API integration, and reliable production delivery."
        />
      </Head>

      <div id="top" className="min-h-screen bg-background text-on-surface">
        <Navbar />
        <main className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-6 py-12 md:px-8">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[400px] w-[800px] max-w-full -translate-x-1/2 rounded-full bg-primary opacity-10 blur-[120px]" />
          <Biodata />
          <Skill />
          <Work />
          <Project />
        </main>
        <Footer />
      </div>
    </>
  );
}
