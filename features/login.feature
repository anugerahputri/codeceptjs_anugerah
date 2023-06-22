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
  Scenario: user seller failed login in web seller with email not match
    Given user open web seller
    And user click button masuk
    And user input email not match
    And user input Password 
    When user click button login
    Then user failed login email and password not match

  @Negatif
  Scenario: user seller failed login in web seller with Password not match
    Given user open web seller
    And user click button masuk
    And user input email
    And user input Password not match 
    When user click button login
    Then user failed login email and password not match

  @Negatif
  Scenario: user seller failed login in web seller when not filling in the email address
    Given user open web seller
    And user click button masuk
    When user not filling email
    And user input Password
    Then user see alret eror email wajib diisi
    And user see button login disable

  @Negatif
  Scenario: user seller failed login in web seller when not filling in the password
    Given user open web seller
    And user click button masuk
    When user input email
    And user not filling Password
    Then user see alret eror Format kata sandi wajib diisi
    And user see button login disable

  @Negatif
  Scenario: user seller failed login in web seller when input email with wrong format
    Given user open web seller
    And user click button masuk
    When user input email with wrong format
    And user input Password
    Then user see alret eror Format email salah

  @Negatif
  Scenario: user seller failed login in web seller when input password is too short
    Given user open web seller
    And user click button masuk
    When user input email
    And user input Password is too short
    Then user see alret kata sandi terlalu pendek
