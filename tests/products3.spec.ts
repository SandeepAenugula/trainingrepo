import { test, expect } from '../fixtures/productFixture'; 

test.describe('Validate Products', () => {
  // Use the data provided by the fixture inside the test block
  test('Validate all products from fixture', async ({ productData }) => {
  
    for (const product of productData.products) {
      console.log(product.name);
      console.log(product.price);
      console.log(product.category);

      console.log('--------------');

      //expect(product.name).toBeTruthy();
      //expect(product.price).toBeGreaterThan(0);
    }
    
  });


});