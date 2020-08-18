//Deteksi Palindrom
const cekPalindrom = (str) => {
    let word = str.toLowerCase();
    let reversed = str.toLowerCase().split("").reverse().join("");

    if (word == reversed) {
        console.log('Palindrom')
    } else {
        console.log("Bukan palindrom")
    }
  }

cekPalindrom('malam');
cekPalindrom('1Malam1');
cekPalindrom('siang');