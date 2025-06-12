const BasePage = require("./base.page");
const { LoginComponent } = require('../components');

class LoginPage extends BasePage{
    
    constructor(){
        super('/');
        this.loginComponent = new LoginComponent();
    }
}

module.exports = LoginPage;