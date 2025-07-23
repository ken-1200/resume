#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import markdownpdf from 'markdown-pdf';
import { extractData } from './extract-data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateMarkdown(data, locale) {
  const isJapanese = locale === 'ja';
  let markdown = '';

  // Get the data for the specified locale
  const profile = data.profileData[locale];
  const mainJobs = data.mainJobs[locale] || [];
  const sideProjects = data.sideProjects[locale] || [];
  const skills = data.skills[locale] || {};
  const outputs = data.outputs[locale] || [];
  const selfPrText = data.selfPrText[locale] || [];

  // Header
  markdown += `# ${isJapanese ? '職務経歴書' : 'Resume'}\n\n`;

  // Profile Section
  markdown += `## ${isJapanese ? '個人情報' : 'Profile'}\n\n`;
  markdown += `- **${isJapanese ? '氏名' : 'Name'}**: ${profile.name}\n`;
  markdown += `- **${isJapanese ? '生年月日' : 'Birth Date'}**: ${profile.birth}\n`;
  markdown += `- **${isJapanese ? '居住地' : 'Location'}**: ${profile.address}\n`;
  markdown += `- **GitHub**: [${profile.github}](https://github.com/${profile.github})\n`;
  markdown += `- **LinkedIn**: [${profile.linkedin}](https://linkedin.com/in/${profile.linkedin})\n\n`;

  // Strengths Section
  if (selfPrText.length > 0) {
    markdown += `## ${isJapanese ? '専門分野・強み' : 'Strengths'}\n\n`;
    selfPrText.forEach((text) => {
      markdown += `- ${text}\n`;
    });
    markdown += '\n';
  }

  // Skills Section
  if (Object.keys(skills).length > 0) {
    markdown += `## ${isJapanese ? 'スキル・知識' : 'Skills & Knowledge'}\n\n`;
    Object.entries(skills).forEach(([category, skillList]) => {
      const categoryNames = {
        languages: isJapanese ? 'プログラミング言語' : 'Programming Languages',
        frameworks: isJapanese ? 'フレームワーク・ライブラリ' : 'Frameworks & Libraries',
        databases: isJapanese ? 'データベース' : 'Databases',
        cloud: isJapanese ? 'クラウド・インフラ' : 'Cloud & Infrastructure',
        tools: isJapanese ? 'ツール・その他' : 'Tools & Others',
      };

      markdown += `### ${categoryNames[category] || category}\n\n`;
      skillList.forEach((skill) => {
        markdown += `- **${skill.name}** (${skill.experience})`;
        if (skill.details) {
          markdown += `: ${skill.details}`;
        }
        markdown += '\n';
      });
      markdown += '\n';
    });
  }

  // Work History Section
  markdown += `## ${isJapanese ? '職務経歴' : 'Work History'}\n\n`;

  // Main Jobs
  if (mainJobs.length > 0) {
    markdown += `### ${isJapanese ? '本業' : 'Full-time'}\n\n`;
    mainJobs.forEach((company) => {
      markdown += generateCompanyMarkdown(company, isJapanese);
    });
  }

  // Side Projects
  if (sideProjects.length > 0) {
    markdown += `### ${isJapanese ? '副業' : 'Side Projects'}\n\n`;
    sideProjects.forEach((company) => {
      markdown += generateCompanyMarkdown(company, isJapanese);
    });
  }

  // Outputs Section
  if (outputs.length > 0) {
    markdown += `## ${isJapanese ? 'アウトプット' : 'Outputs'}\n\n`;
    outputs.forEach((output) => {
      markdown += `- **[${output.title}](${output.url})** (${output.type}, ${output.date})\n`;
      markdown += `  - ${output.description}\n`;
    });
  }

  return markdown;
}

function generateCompanyMarkdown(company, isJapanese) {
  let markdown = '';

  markdown += `#### ${company.companyName}`;
  if (company.companyUrl) {
    markdown += ` ([${isJapanese ? 'ウェブサイト' : 'Website'}](${company.companyUrl}))`;
  }
  markdown += '\n\n';

  markdown += `- **${isJapanese ? '期間' : 'Period'}**: ${company.period}\n`;
  markdown += `- **${isJapanese ? '役職' : 'Position'}**: ${company.position}\n\n`;

  if (company.responsibilities && company.responsibilities.length > 0) {
    markdown += `**${isJapanese ? '職務内容' : 'Responsibilities'}**:\n`;
    company.responsibilities.forEach((resp) => {
      markdown += `- ${resp}\n`;
    });
    markdown += '\n';
  }

  if (company.projects && company.projects.length > 0) {
    markdown += `**${isJapanese ? 'プロジェクト事例' : 'Projects'}**:\n\n`;
    company.projects.forEach((project) => {
      markdown += `##### ${project.title}\n\n`;
      markdown += `- **${isJapanese ? '期間' : 'Period'}**: ${project.period}\n`;
      markdown += `- **${isJapanese ? '概要' : 'Summary'}**: ${project.summary}\n\n`;

      if (project.details && project.details.length > 0) {
        markdown += `**${isJapanese ? '詳細' : 'Details'}**:\n`;
        project.details.forEach((detail) => {
          markdown += `- ${detail}\n`;
        });
        markdown += '\n';
      }

      if (project.technologies && project.technologies.length > 0) {
        markdown += `**${isJapanese ? '使用技術' : 'Technologies'}**: ${project.technologies.join(', ')}\n\n`;
      }
    });
  }

  return markdown;
}

async function generatePDF(markdownPath, pdfPath) {
  return new Promise((resolve, reject) => {
    const options = {
      paperFormat: 'A4',
      paperOrientation: 'portrait',
      paperBorder: '2cm',
      cssPath: path.join(__dirname, 'pdf-styles.css'),
    };

    markdownpdf(options)
      .from(markdownPath)
      .to(pdfPath, (err) => {
        if (err) reject(err);
        else resolve();
      });
  });
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const locale = args[1] || 'ja';
  const outputDir = path.join(__dirname, '../output');

  if (!['markdown', 'pdf', 'both'].includes(command)) {
    console.log('Usage: node generate-resume.mjs [markdown|pdf|both] [ja|en]');
    console.log('Example: node generate-resume.mjs both ja');
    process.exit(1);
  }

  if (!['ja', 'en'].includes(locale)) {
    console.error('Invalid locale. Please use "ja" or "en"');
    process.exit(1);
  }

  try {
    // Create output directory
    await fs.mkdir(outputDir, { recursive: true });

    // Extract data
    console.log('📊 Extracting data...');
    const tempDataPath = await extractData();
    const { data } = await import(tempDataPath);

    // Generate markdown
    if (command === 'markdown' || command === 'both') {
      console.log('📝 Generating markdown...');
      const markdown = generateMarkdown(data, locale);
      const markdownPath = path.join(outputDir, `resume_${locale}.md`);
      await fs.writeFile(markdownPath, markdown);
      console.log(`✅ Markdown saved to: ${markdownPath}`);
    }

    // Generate PDF
    if (command === 'pdf' || command === 'both') {
      console.log('📄 Generating PDF...');

      // First ensure markdown exists
      const markdownPath = path.join(outputDir, `resume_${locale}.md`);
      if (
        !(await fs
          .access(markdownPath)
          .then(() => true)
          .catch(() => false))
      ) {
        const markdown = generateMarkdown(data, locale);
        await fs.writeFile(markdownPath, markdown);
      }

      // Create CSS file for PDF styling
      const cssContent = `
        body {
          font-family: 'Noto Sans JP', 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        h1 { 
          color: #2563eb;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 10px;
        }
        h2 { 
          color: #1e40af;
          margin-top: 30px;
        }
        h3 { 
          color: #3730a3;
          margin-top: 20px;
        }
        h4 { 
          color: #4338ca;
          margin-top: 15px;
        }
        h5 {
          color: #6366f1;
          margin-top: 10px;
        }
        a {
          color: #2563eb;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        ul {
          margin: 10px 0;
        }
        li {
          margin: 5px 0;
        }
        code {
          background-color: #f3f4f6;
          padding: 2px 4px;
          border-radius: 3px;
          font-size: 0.9em;
        }
      `;
      await fs.writeFile(path.join(__dirname, 'pdf-styles.css'), cssContent);

      const pdfPath = path.join(outputDir, `resume_${locale}.pdf`);
      await generatePDF(markdownPath, pdfPath);
      console.log(`✅ PDF saved to: ${pdfPath}`);
    }

    // Clean up
    await fs.unlink(tempDataPath);
    const cssPath = path.join(__dirname, 'pdf-styles.css');
    if (
      await fs
        .access(cssPath)
        .then(() => true)
        .catch(() => false)
    ) {
      await fs.unlink(cssPath);
    }

    console.log('\n🎉 Resume generation completed!');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();
