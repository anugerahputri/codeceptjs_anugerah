Feature: Login
  In order to sell product
  seller must be login in the web seller

  @Positif
  Scenario: user seller successfully login in web seller with registered account
    Given user open web seller
    And user click button masuk
    And user input email
    And user input Password
    When user click button login
    Then user success login 

  @Negatif
  Scenario: user seller failed login in web seller with email and password not match
    Given user open web seller
    And user click button masuk
    And user input email not registered
    And user input Password 
    When user click button login
    Then user failed login email and password do not match
