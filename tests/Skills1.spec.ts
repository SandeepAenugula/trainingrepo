
import { test, expect } from '../fixtures/authFixture';
import { SkillsPage } from '../Pages1/SkillsPage';

test('Login and Logout Test', async ({ page }) => {

    
     const np = new SkillsPage(page);
     await np.addSkill('Java2','Java2Descr');



});