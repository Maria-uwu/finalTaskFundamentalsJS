const BaseComponent = require("./base.component");

class LoginComponent extends BaseComponent{
    constructor(){
        super('.login_wrapper-inner');
    }
    get loginBtn(){
        return this.rootEl.$('#login-button')
    }
    get errorBox(){
        return this.rootEl.$('[data-test="error"]')
    }

    /**
     * @param name {'username' | 'password'}  
     * @returns 
     */

    input(name){
        const selectors = {
            username: '#user-name',
            password: '#password',   
        };
        return this.rootEl.$(selectors[name.toLowerCase()]); 
    }
}

module.exports = LoginComponent; 