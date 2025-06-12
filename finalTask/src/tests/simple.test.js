const { pages } = require('./../po')

describe('Login page', () => {
    beforeEach(async () => {
    await pages('login').open();
    });
  
    it('Check page title', async () => {
      await expect(browser).toHaveTitle('Swag Labs');
    }); 

    it('Test Login form with empty credentials', async () => {
        await pages('login').login.rootEl.waitForDisplayed();
        await pages('login').login.input('username').setValue('testing');
        await pages('login').login.input('password').setValue('hello');
        
        await pages('login').login.input('username').click();
        await browser.keys(['Meta', 'a']); 
        await browser.keys('Backspace');
        await expect(pages('login').login.input('username')).toHaveValue('');

        await pages('login').login.input('password').click();
        await browser.keys(['Meta', 'a']); 
        await browser.keys('Backspace');
        await expect(pages('login').login.input('password')).toHaveValue('');
        
        await pages('login').login.loginBtn.click();
        await pages('login').login.errorBox.waitForDisplayed();
        await expect(pages('login').login.errorBox).toHaveText('Epic sadface: Username is required');
       })

    it('Test Login form with credentials by passing Username', async () => {
        await pages('login').login.rootEl.waitForDisplayed();
        await pages('login').login.input('username').setValue('testing');
        await pages('login').login.input('password').setValue('secret_sauce');

        await pages('login').login.input('password').click();
        await browser.keys(['Meta', 'a']); 
        await browser.keys('Backspace');
        await expect(pages('login').login.input('password')).toHaveValue('');
        
        await pages('login').login.loginBtn.click();
        await pages('login').login.errorBox.waitForDisplayed();
        await expect(pages('login').login.errorBox).toHaveText('Epic sadface: Password is required');
       })

    it('Test Login form with credentials by passing Username & Password', async () => {
        await pages('login').login.rootEl.waitForDisplayed();
        await pages('login').login.input('username').setValue('standard_user');
        await pages('login').login.input('password').setValue('secret_sauce');
        await pages('login').login.loginBtn.click();
        await pages('dashboard').header.rootEl.waitForDisplayed();
        await expect(browser).toHaveTitle('Swag Labs');

    })
  });