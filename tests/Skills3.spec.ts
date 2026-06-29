
import { test, expect } from '../fixtures/skilllsFixture'; 


test.describe('Validate Products', () => {
  // Use the data provided by the fixture inside the test block
  test('Validate all products from fixture', async ({ skillsFixture }) => {
  
    for (const skill of skillsFixture.products) {
      console.log(skill.skillname);
      console.log(skill.skilldescr);


    }
    
  });


});