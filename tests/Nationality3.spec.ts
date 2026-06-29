import { test } from '../fixtures/authFixture';
import { NationalityPage } from '../Pages1/NationalityPage';
import { AllureUtils } from '../utils/allureUtils';
import testData from '../testdata/NationalityData.json';

testData.forEach((data) => {

    test(`Nationality test for ${data.NationalityText}`, async ({ page }) => {

        const np = new NationalityPage(page);

        // Attach plain text log
        await AllureUtils.addText(
            'Execution Log',
            `Starting Nationality Test for: ${data.NationalityText}`
        );

        // Attach complete test data as JSON
        await AllureUtils.addJson(
            'Nationality Test Data',
            data
        );

        // Perform action
        await np.addNationality(data.NationalityText);

        // Capture screenshot and attach
        const screenshot = await page.screenshot({
            fullPage: true
        });

        await AllureUtils.addScreenshot(
            `Nationality_${data.NationalityText}`,
            screenshot
        );

    await page.waitForTimeout(5000);

        // Final execution log
        await AllureUtils.addText(
            'Execution Status',
            `Nationality '${data.NationalityText}' added successfully`
        );
    });

});

/*
What you'll see in Allure Report

For each test case:

📄 Execution Log

Starting Nationality Test for: Indian

📋 Nationality Test Data

{
  "NationalityText": "Indian"
}

🖼️ Nationality_Indian

Screenshot attachment

📄 Execution Status

Nationality 'Indian' added successfully

This is a good real-world pattern because:

addText() → execution logs/status messages.
addJson() → test data or API payloads.
addScreenshot() → UI evidence for debugging and reporting.

*/