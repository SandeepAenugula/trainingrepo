
import { test, expect } from '../fixtures/authFixture';
import { SkillsPage } from '../Pages1/SkillsPage';

//import { test, expect } from '@playwright/test';
import testData from '../testdata/SkillsData.json';

testData.forEach((data) => {

     test(`skills test for ${data.SkillName}`, async ({ page }) => {
          const np = new SkillsPage(page);
          await np.addSkill(data.SkillName,data.SkillDescr);
console.log(data.SkillName+"-"+data.SkillName,data.SkillDescr);
          
     });

});




