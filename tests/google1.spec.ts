import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';


test('Verify Google Title', async ({ page }) => {

//Meta Data
  await allure.owner('QA Team');
  await allure.severity('critical');
  await allure.tag('Smoke');
  await allure.feature('Authentication');
  await allure.story('User Login');

  await page.goto('https://www.google.com');

  await expect(page).toHaveTitle(/Google/);
});