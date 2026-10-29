import { jsPDF } from 'jspdf';

import biodata from '../assets/data/biodata.json';
import projectsData from '../assets/data/projects.json';
import site from '../assets/data/site.json';
import skillsData from '../assets/data/skills.json';
import workData from '../assets/data/work.json';

function formatExpDate(dateStr, language) {
  if (!dateStr) return '';
  if (language !== 'id') return dateStr;
  return dateStr
    .replace('Present', 'Sekarang')
    .replace('January', 'Januari')
    .replace('February', 'Februari')
    .replace('March', 'Maret')
    .replace('April', 'April')
    .replace('May', 'Mei')
    .replace('June', 'Juni')
    .replace('July', 'Juli')
    .replace('August', 'Agustus')
    .replace('September', 'September')
    .replace('October', 'Oktober')
    .replace('November', 'November')
    .replace('December', 'Desember');
}

export function generateAndDownloadCV(language = 'en') {
  const doc = new jsPDF({ format: 'a4', unit: 'mm' });
  const isId = language === 'id';
  const margin = 14;
  const contentWidth = 210 - margin * 2;
  const maxPageY = 283;
  let y = 14;

  function checkPageBreak(neededSpace) {
    if (y + neededSpace > maxPageY) {
      doc.addPage();
      y = 14;
    }
  }

  function drawSectionHeader(title) {
    checkPageBreak(12);
    y += 3.5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(17, 24, 39);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.3);
    doc.line(margin, y, margin + contentWidth, y);
    y += 3.5;
  }

  // Header: Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(17, 24, 39);
  doc.text(biodata.name.toUpperCase(), 105, y, { align: 'center' });
  y += 4.5;

  // Header: Role Headline (exact wording from webpage)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(55, 65, 81);
  const headlineLines = doc.splitTextToSize(biodata.roleHeadline[language], contentWidth);
  headlineLines.forEach((line) => {
    doc.text(line, 105, y, { align: 'center' });
    y += 3.8;
  });

  // Header: Location (exact wording from webpage)
  y += 0.5;
  doc.setFontSize(7.5);
  doc.setTextColor(75, 85, 99);
  doc.text(biodata.location[language], 105, y, { align: 'center' });
  y += 3.5;

  // Header: Contact Details
  const contactText = `${biodata.email}   |   +62 821-2307-3107   |   github.com/rifqicode   |   ${site.siteUrl.replace(/^https?:\/\//, '')}`;
  doc.text(contactText, 105, y, { align: 'center' });
  y += 2.5;

  // Header separator line
  doc.setDrawColor(30, 41, 59);
  doc.setLineWidth(0.4);
  doc.line(margin, y, margin + contentWidth, y);
  y += 2;

  // Section: About / Tentang
  drawSectionHeader(isId ? 'Tentang' : 'About');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(31, 41, 55);
  const summaryLines = doc.splitTextToSize(biodata.summary[language], contentWidth);
  summaryLines.forEach((line) => {
    checkPageBreak(4);
    doc.text(line, margin, y);
    y += 3.6;
  });

  // Section: Skills & Tech Stack / Keahlian & Teknologi
  drawSectionHeader(isId ? 'Keahlian & Teknologi' : 'Skills & Tech Stack');
  doc.setFontSize(8);
  skillsData.skillGroups.forEach((group) => {
    const catName = (group.category[language] || group.category.en) + ': ';
    const textStr = catName + group.names.join(', ');
    const lines = doc.splitTextToSize(textStr, contentWidth);
    lines.forEach((line) => {
      checkPageBreak(3.8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(31, 41, 55);
      doc.text(line, margin, y);
      y += 3.6;
    });
  });

  const focusLabel = (biodata.architectureTitle[language] || (isId ? 'Fokus Teknis' : 'Technical Focus')) + ': ';
  const focusStr = focusLabel + biodata.architectureConcepts.join(', ');
  const focusLines = doc.splitTextToSize(focusStr, contentWidth);
  focusLines.forEach((line) => {
    checkPageBreak(3.8);
    doc.text(line, margin, y);
    y += 3.6;
  });

  // Section: Work Experience / Pengalaman Kerja
  drawSectionHeader(isId ? 'Pengalaman Kerja' : 'Work Experience');
  workData.forEach((job) => {
    checkPageBreak(12);

    // Job Title & Company
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(17, 24, 39);
    doc.text(`${job.title} | ${job.companyName}`, margin, y);

    // Date
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(75, 85, 99);
    doc.text(formatExpDate(job.date, language), margin + contentWidth, y, { align: 'right' });
    y += 4;

    if (job.tracks && job.tracks.length > 0) {
      job.tracks.forEach((track) => {
        checkPageBreak(8);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(31, 41, 55);
        doc.text(track.team[language] || track.team.en, margin + 2, y);

        if (track.techStack && track.techStack.length > 0) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7);
          doc.setTextColor(100, 116, 139);
          doc.text(track.techStack.join(', '), margin + contentWidth, y, { align: 'right' });
        }
        y += 3.6;

        track.workDetails.forEach((detail) => {
          const text = isId && detail.descriptionId ? detail.descriptionId : detail.description;
          const bulletLines = doc.splitTextToSize(text, contentWidth - 6);
          checkPageBreak(bulletLines.length * 3.5 + 1);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.5);
          doc.setTextColor(31, 41, 55);
          bulletLines.forEach((line, lIdx) => {
            if (lIdx === 0) {
              doc.text(`• ${line}`, margin + 3, y);
            } else {
              doc.text(line, margin + 6, y);
            }
            y += 3.4;
          });
        });
        y += 1;
      });
    } else {
      if (job.techStack && job.techStack.length > 0) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(100, 116, 139);
        doc.text(job.techStack.join(', '), margin + 2, y);
        y += 3.5;
      }

      job.workDetails.forEach((detail) => {
        const text = isId && detail.descriptionId ? detail.descriptionId : detail.description;
        const bulletLines = doc.splitTextToSize(text, contentWidth - 6);
        checkPageBreak(bulletLines.length * 3.5 + 1);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(31, 41, 55);
        bulletLines.forEach((line, lIdx) => {
          if (lIdx === 0) {
            doc.text(`• ${line}`, margin + 3, y);
          } else {
            doc.text(line, margin + 6, y);
          }
          y += 3.4;
        });
      });
      y += 1;
    }
    y += 1.5;
  });

  // Section: Education / Pendidikan
  drawSectionHeader(isId ? 'Pendidikan' : 'Education');
  checkPageBreak(6);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(17, 24, 39);
  doc.text(biodata.education[language], margin, y);
  y += 4.5;

  // Section: Personal Projects / Project Personal
  drawSectionHeader(isId ? 'Project Personal' : 'Personal Project');
  projectsData.forEach((proj) => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(17, 24, 39);
    const titleWithBadge = proj.badge ? `${proj.name} (${proj.badge})` : proj.name;
    doc.text(titleWithBadge, margin, y);

    if (proj.tags && proj.tags.length > 0) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(100, 116, 139);
      doc.text(proj.tags.join(', '), margin + contentWidth, y, { align: 'right' });
    }
    y += 3.5;

    const desc = isId && proj.descriptionId ? proj.descriptionId : proj.description;
    const descLines = doc.splitTextToSize(desc, contentWidth - 4);
    checkPageBreak(descLines.length * 3.4 + 1);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(55, 65, 81);
    descLines.forEach((line) => {
      doc.text(line, margin + 2, y);
      y += 3.4;
    });
    y += 1.5;
  });

  // Directly trigger browser download of .pdf
  doc.save('Muhammad-Rifqi-Imam-Saputra-CV.pdf');
}
