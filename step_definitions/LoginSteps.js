const { I } = inject();
// const loginPage = require('../pages/loginPages');

// Given('user open web seller', () => {
//   I.amOnPage("/")
// });

// Given('user click button masuk', () => {
//   I.click({css: 'button.py-2.px-3.bg-primary-60'})
// });

// Given('user input email', () => {
//   I.fillField('#username','anugerah.putri2627@gmail.com')
// });

// Given('user input Password', () => {
//   I.fillField('#password','Suksesmuda')
// });

// When('user click tombol Login', () => {
//   I.click('[type="submit"]')
//   I.wait(7)
// });

// Then('user success login', () => {
//   I.seeInCurrentUrl('/dashboard')
// });

const login = require('../pages/loginPages');

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

Given('user input email not registered', () => {
  login.inputEmailNotRegist()
});

When('user click button login', () => {
  login.clickLogin()
}); 

Then('user success login', () => {
  login.pageDashboard()
});

Then('user failed login email and password do not match', () => {
  login.emailPassNotMatch()
});
