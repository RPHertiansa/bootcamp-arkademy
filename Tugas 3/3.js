//Buatlah fungsi yang memiliki parameter nilaiAwal (number) 
//dan nilaiAkhir (number), serta dataArray (array). 
//Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir 
//dan jumlah data dalam dataArray harus lebih dari 5.
//Fungsi tersebut akan mencari data didalam dataArray 
//yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, 
//mengurutkan hasil pencarian dan menampilkannya ke layar

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal < nilaiAkhir) {
        dataArray.sort(function(a, b){return a-b});
        if (dataArray.length >= 5) {
            console.log(dataArray.filter(num => (nilaiAwal <= num && num <= nilaiAkhir)));
        } else {
            console.log('Jumlah angka dalam dataArray tidak ada')
        }
    } else {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    }

  }

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 17 , [2, 25, 4])
