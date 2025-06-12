const { Then } = require('@wdio/cucumber-framework');
const { pages } = require ('../po')



Then('I should see the error message {string}', async (expectedMessage) => {
  const error = await pages('login').login.errorBox;
  await error.waitForDisplayed();
  await expect(error).toHaveText(expectedMessage);
});

Then('the username field should be empty', async () => {
  await expect(pages('login').login.input('username')).toHaveValue('');
});

Then('the password field should be empty', async () => {
  await expect(pages('login').login.input('password')).toHaveValue('');
});

Then('I should see the page title {string}', async (expectedMessage) => {
    const titleEl = pages('dashboard').header.rootEl; 
    await titleEl.waitForDisplayed(); 
    await expect(titleEl).toHaveText(expectedMessage); 
  });
  