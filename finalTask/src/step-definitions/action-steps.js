const { Given, When } = require('@wdio/cucumber-framework');
const { pages } = require ('../po');
const log = require('../utils/logger');
const { fillInput, clearInput} = require('../utils/helpers');



Given('I open the login page', async () => {
  log.info('Opening login page...');
  await pages('login').open();
  await pages('login').login.rootEl.waitForDisplayed();
  log.info('Login page loaded.');
});

Given('I enter {string} in the username field', async (username) => {
  await fillInput('username', username)
});

Given('I enter {string} in the password field', async (password) => {
  await fillInput('password', password)
});

Given('I clear the username field', async () => {
  await clearInput('username');
});

Given('I clear the password field', async () => {
  await clearInput('password');
});

When('I click the login button', async () => {
  log.info('Clicking login button...');
  await pages('login').login.loginBtn.click();
  log.info('Login button clicked.');
});
