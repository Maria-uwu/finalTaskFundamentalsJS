const DashboardPage = require("./dashboard.page");
const LoginPage = require("./login.page");

/**
 * @param name {'login' | 'dashboard'}  
 * @returns {LoginPage | DashboardPage}
 */

function pages (name){
     const items = {
         login: new LoginPage(),
         dashboard: new DashboardPage(),
     }
     return items[name.toLowerCase()];
}

module.exports = {
    LoginPage,
    DashboardPage,
    pages, 
}