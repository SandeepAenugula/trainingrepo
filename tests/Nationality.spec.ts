import { test, expect } from '@playwright/test';
import { Loginpage } from '../Pages1/Loginpage';
import { NationalityPage } from '../Pages1/NationalityPage';
import { Homepage } from '../Pages1/Homepage';

test('Login and Logout Test', async ({ page }) => {

     const lp = new Loginpage(page);
     const np = new NationalityPage(page);
     const hp = new Homepage(page);

     await lp.navigateToLoginPage();
     await lp.loginUser('Admin','admin123');

     await np.addNationality('India233');

     await hp.HomepageLogout();

    });