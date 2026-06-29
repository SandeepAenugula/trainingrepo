import { test, expect } from '../fixtures/authFixture';
import { NationalityPage } from '../Pages1/NationalityPage';
import * as XLSX from 'xlsx';
import path from 'path';
//npm install xlsx

// Resolve correct file path
const filePath = path.resolve(__dirname, '../testdata/Nationality_Data.xlsx');

const workbook = XLSX.readFile(filePath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const excelData = XLSX.utils.sheet_to_json<any>(sheet);

excelData.forEach((data: any) => {

  test(`Nationalities test for ${data["NationalityText"]}`, async ({ page }) => {

    const np = new NationalityPage(page);
    await np.addNationality(data["NationalityText"]);

  });

});