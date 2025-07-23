#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and parse the TypeScript file to extract data
async function extractData() {
  const filePath = path.join(__dirname, '../src/data/localized-data.ts');
  const fileContent = await fs.readFile(filePath, 'utf-8');

  // Create a temporary module that can be imported
  const moduleContent = `
    ${fileContent
      .replace(/import.*$/gm, '')
      .replace(/export\s+function\s+useProfileData.*$/gm, '')
      .replace(/^\s*const locale = useLocale\(\);.*$/gm, '')
      .replace(/return\s*{[\s\S]*?};?\s*}?\s*$/gm, '')}
    
    export const data = {
      profileData,
      mainJobs,
      sideProjects,
      skills,
      outputs,
      selfPrText
    };
  `;

  const tempPath = path.join(__dirname, 'temp-data.mjs');
  await fs.writeFile(tempPath, moduleContent);

  return tempPath;
}

export { extractData };
