const { I } = inject();

const register = require('../pages/registerPages');

//Given
Given('user open web seller', () => {
    register.openURL()
  });

Given('user input personal data', () => {
    register.inputNama()
    register.inputEmail()
    register.inputPhone()
  });

Given('user click button daftar', () => {
    register.daftar()
  });

Given('user open email', () => {
    register.openEmail()
    register.inputUserEmail()
  });

Given('user click atur kata sandi', () => {
    register.clickAturSandi()
  });
  
Given('user input kata sandi', () => {
    register.inputKataSandi()
  });

Given('user input konfirmasi kata sandi', () => {
    register.inputkonfirmSandi()
  });

Given('user click lengkali data perusahaan', () => {
    register.submit()
    register.timeToWait()
  });

Given('user lengkapi profil perusahaan', () => {
    register.selectBadanUsaha()
    register.selectTipe()
    register.seletStatus()
    register.selectKegiatanUsaha()
    register.selectBUMN()
    register.selectOrganisasi()
    register.inputAlamat()
    register.selectProvKec()
    register.kodePos()
    register.noTelfon()
    register.kirim()
  });

Given('user complete form dokumen legalitas perusahaan', () => {
    register.selectNib()
    register.inputNamaPerusahaan()
    register.inputNoKTP()
    register.uploadKTP()
    register.inputNoNPWP()
    register.uploadNPWP()
    register.selanjutnya()
  });



//When
When('user click button daftar to submit data', () => {
    register.submit()
  });

When('user click button simpan dan masuk', () => {
    register.submit()
  });


//Then
Then('user success send email to register as a seller', () => {
    register.successSendEmail()
  });

Then('user success register user', () => {
    register.successRegisUser()
  });


