const { I } = inject();

const login = require('../pages/loginPages');

//Given
Given('user open web seller', () => {
  login.openURL()
});

Given('user click button masuk', () => {
  login.clickMasuk()
});

Given('user input email', () => {
  login.inputEmail()
});

Given('user input Password', () => {
  login.inputPassword()
});

Given('user input Password not match', () => {
  login.inputPassNotMatch()
});

Given('user input email not match', () => {
  login.inputEmailNotMatch()
});

//When 
When('user click button login', () => {
  login.clickLogin()
});

When('user not filling email', () => {
  login.inputEmail()
  login.clrEmail()
});

When('user not filling Password', () => {
  login.inputPassword()
  login.clrPass()
});

When('user input email with wrong format', () => {
  login.inputEmailWorng()
});

When('user input Password is too short', () => {
  login.inputPassShort()
});

//Then 
Then('user success login', () => {
  login.pageDashboard()
});

Then('user failed login email and password not match', () => {
  login.emailPassNotMatch()
});

Then('user see button login disable', () => {
  login.btnLoginDisable()
});

Then('user see alret eror email wajib diisi', () => {
  login.alrtEmailWajibIsi()
});

Then('user see alret eror Format kata sandi wajib diisi', () => {
  login.alrtPassWajibIsi()
});

Then('user see alret eror Format email salah', () => {
  login.alrtFormatEmailSalah()
});

Then('user see alret kata sandi terlalu pendek', () => {
  login.alrtSandiTerlaluPendek()
});
