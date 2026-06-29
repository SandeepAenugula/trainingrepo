import { test, expect } from '@playwright/test';
import { Loginpage } from '../Pages1/Loginpage';
import { SkillsPage } from '../Pages1/SkillsPage';
import { Homepage } from '../Pages1/Homepage';

test('Login and Logout Test', async ({ page }) => {

     const lp = new Loginpage(page);
     const np = new SkillsPage(page);
     const hp = new Homepage(page);

     await lp.navigateToLoginPage();
     await lp.loginUser('Admin','admin123');

     await np.addSkill('Java1','Java1Descr');

     await hp.HomepageLogout();

    });