const { Given, When } = require('@wdio/cucumber-framework');
const { pages } = require ('../po')


Given('I open the login page', async () => {
  await pages('login').open();
  await pages('login').login.rootEl.waitForDisplayed();
});

Given('I enter {string} in the username field', async (username) => {
  await pages('login').login.input('username').setValue(username);
});

Given('I enter {string} in the password field', async (password) => {
  await pages('login').login.input('password').setValue(password);
});

Given('I clear the username field', async () => {
  const input = await pages('login').login.input('username');
  await input.click();
  await browser.keys(['Meta', 'a']);
  await browser.keys('Backspace');
});

Given('I clear the password field', async () => {
  const input = await pages('login').login.input('password');
  await input.click();
  await browser.keys(['Meta', 'a']);
  await browser.keys('Backspace');
});

When('I click the login button', async () => {
  await pages('login').login.loginBtn.click();
});
