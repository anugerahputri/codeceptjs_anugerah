Feature: Register
  In order to sell product
  user must be register as a seller

  @Positif 
  Scenario: user success send email to register as a seller
    Given user open web seller
    And user click button daftar
    And user input personal data
    When user click button daftar to submit data
    Then user success send email to register as a seller

  @Positif @focus
  Scenario: user success register after atur kata sandi via email and lengkapi data perusahaan
    Given user open email
    And user click atur kata sandi
    And user input kata sandi
    And user input konfirmasi kata sandi
    When user click button simpan dan masuk
    Then user success register user
    And user click lengkali data perusahaan
    And user complete form dokumen legalitas perusahaan
    # And user complete form profil perusahaan
    # Then user send data and waits for confirmation from Mimin


