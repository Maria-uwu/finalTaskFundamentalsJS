const { pages } = require('../po');
const log = require('./logger');

async function fillInput(field, value) {
    log.info(`Filling "${field}" with: "${value}"`);
    await pages('login').login.input(field).setValue(value);
    log.info(`"${field}" field filled.`);
  }

async function clearInput(field) {
    log.info(`Clearing "${field}" field...`);
    const input = await pages('login').login.input(field);
    await input.click();
    await browser.keys(['Meta', 'a']);
    await browser.keys('Backspace');
    log.info(`"${field}" field cleared.`);
}

module.exports = { fillInput, clearInput};