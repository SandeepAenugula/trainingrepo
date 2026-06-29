import { test, expect } from '../fixtures/authFixture';
import { SkillsPage } from '../Pages1/SkillsPage';
import * as XLSX from 'xlsx';
import path from 'path';

// Resolve correct file path
const filePath = path.resolve(__dirname, '../testdata/Skills_Data.xlsx');

const workbook = XLSX.readFile(filePath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const excelData = XLSX.utils.sheet_to_json<any>(sheet);

excelData.forEach((data: any) => {

  test(`Skills test for ${data["SkillName"]}`, async ({ page }) => {

    const sp = new SkillsPage(page);
    await sp.addSkill(data["SkillName"], data["SkillDescription"]);

  });

});


/*

✅ Correct fix (important)
1. ❌ Remove the wrong package
npm uninstall path
2. ✅ Install Node.js type definitions
npm install --save-dev @types/node

This gives TypeScript proper typings for all built-in modules like:

path
fs
http
etc.
3. ✅ Update your tsconfig.json

Make sure it includes:

{
  "compilerOptions": {
    "types": ["node"]
  }
}
✅ Now this will work perfectly
import path from 'path';

const fullPath = path.join(__dirname, 'file.txt');
💡 Why this works
path → built into Node.js
@types/node → provides TypeScript definitions for all Node.js core modules

*/