import { test, expect } from '@playwright/test';
import products from '../testdata/products.json';

test.describe('Validate Products', () => {

  for (const product of products.products) {

    test(`Validate product - ${product.name}`, async ({ page  }) => {

      console.log(product.name);
      console.log(product.price);

      // Example validations
      expect(product.name).toBeTruthy();
      expect(product.price).toBeGreaterThan(0);

   

    });

  }

});

/*

✅ One-line benefit of Fixture in Playwright:

👉 Fixtures provide reusable, centralized, and injectable test data/dependencies across multiple tests.

🔥 Key benefits (bullet points):
🔁 Reusability – same data/setup can be used in many tests
📦 Centralized control – manage data in one place instead of repeating imports
🔌 Dependency injection – automatically inject data like productData into tests
🔄 Easy replacement – switch JSON → API/DB without changing test files
🧩 Clean architecture – separates test logic from test data/setup
📈 Scalability – best for large frameworks with shared test resources
💡 In your case (important insight):
Without fixture → simple + direct JSON usage
With fixture → useful only when data becomes dynamic or shared across many files

*/