import Head from 'next/head';
import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Skill from '../components/Skill';
import Work from '../components/Work';
import Biodata from '../components/Biodata';
import Project from '../components/Project';

import site from '../assets/data/site.json';
import biodata from '../assets/data/biodata.json';

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site.siteUrl}/#person`,
      name: biodata.name,
      alternateName: [biodata.shortName, 'rifqicode'],
      jobTitle: 'Senior Backend Engineer',
      url: site.siteUrl,
      image: `${site.siteUrl}/og-image.png`,
      email: `mailto:${biodata.email}`,
      telephone: `+${biodata.whatsapp}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Depok',
        addressRegion: 'Jawa Barat',
        addressCountry: 'ID',
      },
      sameAs: [
        biodata.githubUrl,
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'PT Aksi Visitama (TADA)',
      },
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Universitas Bina Nusantara (BINUS)',
        },
      ],
      knowsAbout: [
        'Backend Engineering',
        'Distributed Systems',
        'Microservices Architecture',
        'Golang',
        'Node.js',
        'PostgreSQL',
        'Kafka',
        'Debezium CDC',
        'Redis',
        'High-Throughput APIs',
        'System Design',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.siteUrl}/#website`,
      url: site.siteUrl,
      name: `${biodata.shortName} - Portfolio`,
      description: site.description,
      inLanguage: ['en', 'id'],
      publisher: {
        '@id': `${site.siteUrl}/#person`,
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${site.siteUrl}/#profilepage`,
      url: site.siteUrl,
      name: site.title,
      isPartOf: {
        '@id': `${site.siteUrl}/#website`,
      },
      about: {
        '@id': `${site.siteUrl}/#person`,
      },
      mainEntity: {
        '@id': `${site.siteUrl}/#person`,
      },
    },
  ],
};

export default function Home() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('preferred_language');
      if (saved === 'en' || saved === 'id') {
        setLanguage(saved);
        document.documentElement.lang = saved;
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    try {
      localStorage.setItem('preferred_language', lang);
      document.documentElement.lang = lang;
    } catch (e) {
      // ignore
    }
  };

  const isId = language === 'id';
  const pageTitle = isId
    ? `${biodata.name} - Senior Backend Engineer | Sistem Terdistribusi`
    : site.title;
  const pageDescription = isId
    ? `Portofolio ${biodata.name}, Senior Backend Engineer dengan 7+ tahun pengalaman membangun arsitektur sistem terdistribusi, microservices Go & Node.js, event-driven streaming Kafka & CDC, dan integrasi enterprise.`
    : site.description;

  return (
    <>
      <Head>
        {/* Core Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={site.keywords} />
        <meta name="author" content={site.author} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Canonical Link */}
        <link rel="canonical" href={site.siteUrl} />

        {/* Multi-language / Alternate Tags */}
        <link rel="alternate" hrefLang="en" href={site.siteUrl} />
        <link rel="alternate" hrefLang="id" href={site.siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={site.siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={site.siteUrl} />
        <meta property="og:site_name" content={`${biodata.shortName} Portfolio`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${site.siteUrl}/og-image.png`} />
        <meta property="og:image:secure_url" content={`${site.siteUrl}/og-image.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${biodata.name} - Senior Backend Engineer`} />
        <meta property="og:locale" content={isId ? 'id_ID' : 'en_US'} />
        <meta property="og:locale:alternate" content={isId ? 'en_US' : 'id_ID'} />
        <meta property="profile:first_name" content="Muhammad Rifqi" />
        <meta property="profile:last_name" content="Imam Saputra" />
        <meta property="profile:username" content="rifqicode" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={site.siteUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${site.siteUrl}/og-image.png`} />
        <meta name="twitter:image:alt" content={`${biodata.name} - Senior Backend Engineer`} />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div id="top" className="min-h-screen bg-white text-text-primary">
        <Navbar language={language} onLanguageChange={handleLanguageChange} />

        <main className="mx-auto flex w-full max-w-[960px] flex-col gap-12 px-4 py-6 sm:gap-16 sm:px-6 sm:py-10 md:gap-20 md:px-8 md:py-16">
          <Biodata language={language} />
          <Work language={language} />
          <Skill language={language} />
          <Project language={language} />
        </main>

        <Footer language={language} />
      </div>
    </>
  );
}
