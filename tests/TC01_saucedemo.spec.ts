import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages2/LoginPage';
import { ProductsPage } from '../Pages2/ProductsPage';

test('Login and Logout Test', async ({ page }) => {


   

  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.navigateToLoginPage();
  await login.loginUser('standard_user', 'secret_sauce');

  await products.addProductsAndOpenCart();

     await page.pause();



    });