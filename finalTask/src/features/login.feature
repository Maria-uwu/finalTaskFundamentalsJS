Feature: Login

Background:
    Given I open the login page

Scenario: Test login form with empty credentials
    And I enter "<username>" in the username field
    And I enter "<password>" in the password field
    And I clear the username field
    And I clear the password field
    When I click the login button
    Then I should see the error message "<expectedError>"
    Then the username field should be empty
    Then the password field should be empty

Examples:
  | username      | password      | expectedError         |
  | invalid_user  | invalid_pass  | Epic sadface: Username is required  |


Scenario: Test Login form with credentials by passing Username
    And I enter "<username>" in the username field
    And I enter "<password>" in the password field
    And I clear the password field
    When I click the login button
    Then I should see the error message "<expectedError>"
    Then the password field should be empty

Examples:
  | username       | password       | expectedError          |
  | standard_user  | secret_sauce   | Epic sadface: Password is required   |

Scenario: Test Login form with credentials by passing Username & Password
    And I enter "<username>" in the username field
    And I enter "<password>" in the password field
    When I click the login button
    Then I should see the page title "<expectedTitle>"

Examples:
  | username       | password       | expectedTitle |
  | standard_user  | secret_sauce   | Swag Labs     |

