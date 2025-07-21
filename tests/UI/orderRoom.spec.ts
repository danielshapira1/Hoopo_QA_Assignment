import { expect, test } from '@playwright/test';
import {HomePage } from '../../pages/HomePage';

test('Admin can log in successfully from homepage', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.open();
  
});