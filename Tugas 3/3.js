//Buatlah fungsi yang memiliki parameter nilaiAwal (number) 
//dan nilaiAkhir (number), serta dataArray (array). 
//Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir 
//dan jumlah data dalam dataArray harus lebih dari 5.
//Fungsi tersebut akan mencari data didalam dataArray 
//yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, 
//mengurutkan hasil pencarian dan menampilkannya ke layar

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal < nilaiAkhir) {
        if (dataArray.length >= 5) {
            dataArray.sort(function(a, b){return a-b});
            let filtered = dataArray.filter(num => (nilaiAwal <= num && num <= nilaiAkhir));
            if (filtered.length > 0) {
                console.log (filtered)
            } else {
                console.log('Angka tidak ditemukan')
            }
        } else {
            console.log('Jumlah angka dalam dataArray kurang dari 5')
        }
    } else {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    }

  }

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 17 , [2, 25, 4])
seleksiNilai(5, 17 , [2, 25, 4, 26, 30])
