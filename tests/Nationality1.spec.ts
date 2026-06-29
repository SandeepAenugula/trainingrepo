// tests/nationality.spec.ts
import { test, expect } from '../fixtures/authFixturea';
import { NationalityPage } from '../Pages1/NationalityPage';

test('Test 1 - Create Nationality', async ({ page }) => {

  const np = new NationalityPage(page);
  await np.addNationality(`India_${Date.now()}`);

});


















/*
test('Test 2 - Another Test', async ({ page }) => {

  const np = new NationalityPage(page);
  await np.addNationality(`US_${Date.now()}`);

});*/