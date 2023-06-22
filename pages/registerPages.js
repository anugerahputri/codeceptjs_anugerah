const { I } = inject();
const register = require('../Locator/registerLocator');

module.exports = {
openURL(){
    I.amOnPage('/')
},

inputPhone(){
    I.fillField(register.elements.inpPhone,'850000000000')
},

inputEmail(){
    I.fillField(register.elements.inpEmail,'testauto3@harakirimail.com') // email hanya dapat di gunakan 1 kali
},

inputNama(){
    I.fillField(register.elements.inpNama,'saya automation')
},

daftar(){
    I.click(register.elements.btnDaftar)
},

submit(){
    I.click(register.elements.btnSubmit)
    I.wait(5)
},

successSendEmail(){
    I.see('Konfirmasi Email')
},

openEmail(){
    I.amOnPage('https://harakirimail.com/')
},

inputUserEmail(){
    I.fillField(register.harakiri.inpEmail, 'testauto3@harakirimail.com') //Email sama kan dengan input email
    I.pressKey('Enter')
    I.wait(10)
    I.click('Selamat bergabung di PaDi UMKM')
    I.wait(10)
},

clickAturSandi(){
    I.click('.btn-primary')
},

inputKataSandi(){
    I.fillField(register.elements.inpPass,'sandianutomate')
},

inputkonfirmSandi(){
    I.fillField(register.elements.inpKonfirmPass,'sandianutomate')
},

successRegisUser(){
    I.see('Pendaftaran Berhasil')
},

timeToWait(){
    I.wait(5)
},

selectNib(){
    I.click(register.elements.nibTidak)
    I.click(register.elements.btnSelanjutnya)
    I.wait(3)
},

inputNamaPerusahaan(){
    I.fillField(register.elements.inpNamaPerusahaan,namaPerusahaan)

    function namaPerusahaan() {
        var nama = "PT. Testing Auto"
        var text = "";

            var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";
            for (var i = 0; i < 4; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            var value = nama + text
            return value;
        }
},

inputNoKTP(){
    I.fillField(register.elements.inpNoKtp, noKTP)
    
    function noKTP() {
        var no = "000"
        var text = "";

            var possible = "1234567890";
            for (var i = 0; i < 13; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            var value = no + text
            return value;
        }
},

uploadKTP(){
    I.attachFile(register.elements.upKtp, 'D:\codeceptjs\ini terakhir\codeceptjs_anugerah\attachFile\ktp dummy.jpeg')
},

inputNoNPWP(){
    I.fillField(register.elements.inpNpwp,noNpwp)

    function noNpwp() {
        var no = "5555"
        var text = "";

            var possible = "1234567890";
            for (var i = 0; i < 14; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            var value = no + text
            return value;
        }
},
    
uploadNPWP(){
    I.attachFile(register.elements.upNpwp, 'D:\codeceptjs\ini terakhir\codeceptjs_anugerah\attachFile\npwp dummy.jpeg')
},

selanjutnya(){
    I.click(register.elements.btnSelanjutnya)
},

selectBadanUsaha(){
    I.click(register.elements.value1).at(1)
},
selectTipe(){
    I.click(register.elements.value1).at(2)
},
seletStatus(){
    //no action (default non pkp) 
},
// selectKegiatanUsaha(){
//     I.selectOption()
// }
// selectBUMN()
// selectOrganisasi()
// inputAlamat()
// selectProvKec()
// kodePos()
// noTelfon()
// kirim()





}


