import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {


  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   //await page.locator('input[placeholder="Search Amazon.in"]').fill('Laptops');
   //await page.locator('input[id="nav-search-submit-button"]').click();

   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Laptops');
//cssSelector

      await page.locator('//input[@name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

      

      // Navigate to Nationalities
  await page.locator("//span[text()='Admin']").click();
  await page.locator("//a[text()='Nationalities']").click();

  // Click Add
  await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']").click();

  
  // Enter Nationality Name
  const nationalityName = 'Indian156'+'_' + Date.now();
  await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(nationalityName);



  // Click Save
  await page.locator("//button[text()=' Save ']").click();



 ;

    await page.waitForTimeout(5000);

   // Click profile dropdown (top right)
  await page.locator('.oxd-userdropdown-tab').click();

  // Click Logout
  await page.locator('a:has-text("Logout")').click();

await page.pause();







  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);



});