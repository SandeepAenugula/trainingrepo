import { test, expect } from '../fixtures/productFixture';
import products from '../testdata/products.json';

test.describe('Validate Products', () => {

  for (const product of products.products) {

    test(`Validate product - ${product.name}`, async ({ page, productData }) => {

      console.log(product.name);
      console.log(product.price);

      expect(product.name).toBeTruthy();
      expect(product.price).toBeGreaterThan(0);
    });

  }

});