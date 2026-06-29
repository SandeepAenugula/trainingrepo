import { test } from '../fixtures/authFixture';
import { NationalityPage } from '../Pages1/NationalityPage';
import { readExcel } from '../utils/excelReader';

// Read data from Excel (project root based path)
const excelData = readExcel('../testdata/Nationality_Data.xlsx');

excelData.forEach((data: any) => {

  test(`Nationalities test for ${data["NationalityText"]}`, async ({ page }) => {

    const np = new NationalityPage(page);
    await np.addNationality(data["NationalityText"]);

  });

});