import { test, expect } from '../fixtures/authFixtureb';
import { NationalityPage } from '../Pages1/NationalityPage';
import testData from '../testdata/TestData.json';

testData.forEach((data1, index) => {

  test.describe(`User Row ${index + 1}`, () => {

    test.use({ loginData: data1 });

    test(`TC_${index + 1} - Create Nationality - ${data1.username}`, async ({ page }) => {

      const np = new NationalityPage(page);

      if (data1.loginExpected) {
        // ✅ Valid login → perform action
        await np.addNationality(`India_${Date.now()}`);
      } else {
        // ❌ Invalid login → validate error
        await expect(page).toHaveURL(/login/);
        await expect(page.locator('.oxd-alert-content-text')).toBeVisible();

       
      }

    });

  });

});