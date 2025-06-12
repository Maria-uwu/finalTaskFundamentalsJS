const { Then } = require('@wdio/cucumber-framework');
const { pages } = require ('../po')
const log = require('../utils/logger');
const { assertFieldEmpty, assertErrorMessage, assertTitleEquals } = require ('../utils/assertions')



Then('I should see the error message {string}', async (expectedMessage) => {
  await assertErrorMessage(expectedMessage)
});

Then('the username field should be empty', async () => {
  await assertFieldEmpty('username');
});


Then('the password field should be empty', async () => {
  await assertFieldEmpty('password');
});

Then('I should see the page title {string}', async (expectedTitle) => {
  await assertTitleEquals(expectedTitle)
  });
  