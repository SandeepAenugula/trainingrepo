import { test, expect } from '@playwright/test';

test('Verify Google Title', async ({ page }) => {
  await page.goto('https://www.google.com');

  await expect(page).toHaveTitle(/Google/);
});

//npm install -D allure-playwright allure-commandline
//npx allure generate allure-results --clean -o allure-report
//npx allure serve allure-results
