const { I } = inject();
const login = require('../Locator/loginLocator');
module.exports = {

openURL(){
  I.amOnPage('/')
},

clickMasuk() {
  I.click(login.elements.btnMasuk)
},

inputEmail(){
  I.fillField(login.elements.inpEmail, 'anugerah.putri2627@gmail.com')
},

inputEmailNotRegist(){
  I.fillField(login.elements.inpEmail, 'emailnotregist@gmail.com')
},

inputPassword(){
  I.fillField(login.elements.inpPass, secret('Suksesmuda'))
},

clickLogin(){
  I.click(login.elements.btnSubmit)
  I.wait(10)
},

pageDashboard(){
  I.seeInCurrentUrl('/dashboard')
},

emailPassNotMatch(){
  I.see('Silahkan periksa kembali email dan kata sandi anda')
}
}
