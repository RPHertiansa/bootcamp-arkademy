function rerata(mat, ind, ing, ipa) {

    hasil=(mat+ ind+ ing+ ipa)/4;

    if (hasil >= 90 && hasil <= 100) {
        console.log(`Rata-rata nilai ${hasil}, Grade A`)
    } else if (hasil >= 80 && hasil <= 89) {
        console.log(`Rata-rata nilai ${hasil}, Grade B`)
    } else if (hasil >= 70 && hasil <= 79) {
        console.log(`Rata-rata nilai ${hasil}, Grade C`)
    } else if (hasil >= 60 && hasil <= 69) {
        console.log(`Rata-rata nilai ${hasil}, Grade D`)
    }  else if (hasil >= 0 && hasil <= 59) {
        console.log(`Rata-rata nilai ${hasil}, Grade E`)
    } else {
        console.log('Periksa kembali nilai yang dimasukkan')
    } 
};

//masukkan nilai disini
rerata(80, 90, 89, 69);
rerata(100, 98, 96, 90);
