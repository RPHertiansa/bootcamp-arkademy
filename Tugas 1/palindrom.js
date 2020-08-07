function cekPalindrom(str) {

    var newStr= str.replace(/[^0-9a-z]/gi, '').toLowerCase().split("");
  
    for(var i=0; i < (newStr.length)/2; i++){ 
      if(newStr[i] !== newStr[newStr.length-i-1]){ 
        console.log('bukan palindrom');
      } 
    }
    console.log('palindrom');
  }
  cekPalindrom('1Malam1');
  let r=[2,3,4,5,6,6];
  console.log(r)