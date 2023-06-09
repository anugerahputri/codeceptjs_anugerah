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

inputEmailNotMatch(){
  I.fillField(login.elements.inpEmail, 'new@mail.com')
},

inputPassword(){
  I.fillField(login.elements.inpPass, secret('Suksesmuda'))
},

inputPassNotMatch(){
  I.fillField(login.elements.inpPass, secret('NotMatchlah'))
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
},

clrEmail(){
  I.pressKey(['CommandOrControl', 'A'])
  I.pressKey('Backspace')
},

clrPass(){
  I.pressKey(['CommandOrControl', 'A'])
  I.pressKey('Backspace')
},

alrtEmailWajibIsi(){
  I.see('Email wajib diisi')
},

alrtPassWajibIsi(){
  I.see('Kata sandi wajib diisi')
},

btnLoginDisable(){
  I.seeElement(login.elements.btnSubmit,':disabled')
},

inputPassShort(){
  I.fillField(login.elements.inpPass,'1122')
},

inputEmailWorng(){
  I.fillField(login.elements.inpEmail,'testing')
},

alrtSandiTerlaluPendek(){
  I.see('Kata sandi terlalu pendek')
},

alrtFormatEmailSalah(){
  I.see('Format email salah')
}

}
