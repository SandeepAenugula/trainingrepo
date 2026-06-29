import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

test('login test', async ({ page }) => {

  await allure.step('Open orange hrm login page', async () => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

    await allure.step('Enter credentials', async () => {
    await page.locator('//input[@name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    });

     const loginscreenshot = await page.screenshot();
      await allure.attachment(
        'Login Page Screenshot',
        loginscreenshot,
        'image/png'
      );
    
    await allure.step('Click Login', async () => {
    await page.locator('button[type="submit"]').click();
    });

});


/*
Open Report
npx allure open allure-report

generate and open in one command:
npx allure serve allure-results

await allure.step('Step Name', async () => {
  // actions
});

*/