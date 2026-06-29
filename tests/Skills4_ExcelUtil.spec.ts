import { test } from '../fixtures/authFixture';
import { SkillsPage } from '../Pages1/SkillsPage';
import { readExcel } from '../utils/excelReader';

// Read Excel data
const excelData = readExcel('../testdata/Skills_Data.xlsx');

excelData.forEach((data: any) => {

  test(`Skills test for ${data["SkillName"]}`, async ({ page }) => {

    const sp = new SkillsPage(page);
    await sp.addSkill(data["SkillName"], data["SkillDescription"]);

  });

});