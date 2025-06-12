const {HeaderComponent, LoginComponent} = require("../components");

class BasePage{
    constructor(url){
        this.url = url;
        this.header = new HeaderComponent();
        this.login = new LoginComponent();
    }
    open(){
        return browser.url(this.url);
    }
}

module.exports = BasePage;