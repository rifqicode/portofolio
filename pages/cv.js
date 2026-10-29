import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import biodata from '../assets/data/biodata.json';
import { generateAndDownloadCV } from '../utils/generateCV';

export default function CVDirectDownload() {
  const router = useRouter();
  const [downloaded, setDownloaded] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    let selectedLang = 'en';
    try {
      const queryLang = router.query.lang;
      if (queryLang === 'en' || queryLang === 'id') {
        selectedLang = queryLang;
      } else {
        const saved = localStorage.getItem('preferred_language');
        if (saved === 'en' || saved === 'id') {
          selectedLang = saved;
        }
      }
    } catch (e) {
      // ignore
    }

    setLanguage(selectedLang);
    generateAndDownloadCV(selectedLang);
    setDownloaded(true);
  }, [router.query.lang]);

  const isId = language === 'id';

  return (
    <>
      <Head>
        <title>{biodata.name} - CV Download</title>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-surface-subtle">
        <div className="clean-card max-w-md w-full rounded-2xl p-6 sm:p-8 bg-white border border-surface-border shadow-card flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-surface-muted border border-surface-border flex items-center justify-center text-text-primary">
            <span className="material-symbols-outlined text-[24px]">description</span>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold text-text-primary">
              {biodata.name}
            </h1>
            <p className="text-xs text-text-muted">
              Curriculum Vitae (ATS Format)
            </p>
          </div>

          <p className="text-sm text-text-secondary">
            {downloaded
              ? isId
                ? 'CV dalam format .pdf berhasil diunduh secara otomatis.'
                : 'Your CV in .pdf format has been downloaded automatically.'
              : isId
              ? 'Sedang membuat file PDF...'
              : 'Generating your PDF file...'}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full pt-2">
            <button
              type="button"
              onClick={() => generateAndDownloadCV(language)}
              className="w-full inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-neutral-800"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>{isId ? 'Unduh Ulang' : 'Download Again'}</span>
            </button>

            <Link href="/">
              <a className="w-full inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-surface-border bg-white px-4 py-2 text-xs font-semibold text-text-secondary transition hover:border-surface-border-strong hover:text-black">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                <span>{isId ? 'Ke Beranda' : 'Back Home'}</span>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
