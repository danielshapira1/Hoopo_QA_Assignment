import { expect, test } from '@playwright/test';
import {HomePage } from '../../pages/HomePage';
import {AdminPage} from '../../pages/AdminPage'

test('Admin can log in successfully from homepage', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.open();
  // Step 1: Click Admin and move to login page
  const adminLoginPage = await homePage.goToAdminLogin();
  // Step 2: Login
  await adminLoginPage.login('admin', 'password');
  // Step 3: Validate login
  const adminPage = new AdminPage(page);
  expect(await adminPage.isLoggedIn()).toBeTruthy();
});

test('failed login', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.open();
  // Step 1: Click Admin and move to login page
  const adminLoginPage = await homePage.goToAdminLogin();
  // Step 2: Login
  await adminLoginPage.login('adminafsd', 'passwordasd');
  await adminLoginPage.login('', '');
  await adminLoginPage.login('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
  await adminLoginPage.login('$@#$admin', '@$%#%password');
});

