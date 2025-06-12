// utils/assertions.js
const { pages } = require('../po');
const log = require('./logger');

async function assertErrorMessage(expectedMessage){
  const error = await pages('login').login.errorBox;
  log.info(`Verifying expected error message: "${expectedMessage}"`);
  await error.waitForDisplayed();
  const actualText = await error.getText();
  log.debug(`Actual error message: "${actualText}"`);
  await expect(error).toHaveText(expectedMessage);
  log.info('Error message matches expected.');
}

async function assertFieldEmpty(fieldName) {
  log.info(`Verifying that "${fieldName}" field is empty...`);
  const input = await pages('login').login.input(fieldName);
  const value = await input.getValue();
  log.debug(`Actual value of "${fieldName}" field: "${value}"`);
  await expect(input).toHaveValue('');
  log.info(`"${fieldName}" field is empty as expected.`);
}

async function assertTitleEquals(expectedTitle){
  const titleEl = pages('dashboard').header.rootEl; 
  log.info(`Verifying that the name of the page be: "${expectedTitle}"`);
  await titleEl.waitForDisplayed(); 
  const actualTitle = await titleEl.getText();
  log.debug(`Actual title: "${actualTitle}"`);
  await expect(titleEl).toHaveText(expectedTitle); 
  log.info('Title matches expected.');
}

module.exports = {
  assertFieldEmpty, assertTitleEquals, assertErrorMessage
};
