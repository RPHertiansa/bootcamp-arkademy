//Buatlah sambungan program menggunakan then catch dan juga try catch untuk 
//mengecek hari kerja dari kode Asynchronous dibawah dan jelaskan penggunaan 
//then catch dan try catch dengan memberikan komentar di bawahnya:
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject('bukan hari kerja')
            }
        }, 1000);
    });
};
cekHariKerja('sabtu')
.then((response) => {
    console.log(`Terpenuhi. Hari ini adalah ${response}`)
})
.catch((error) => {
    console.log(`Tidak Terpenuhi, karena hari ini ${error}`)
});






// const janji = (status) => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (status === 1) {
//             resolve('Janji terpenuhi')
//         } else if (status === 2) {
//             resolve('Janji terpenuhi 2')
//         } else {
//             reject ('Janji ditolak')
//         }
//     }, 1000);
// });


// }
// janji(1).then((response) => {
//     console.log('Terpenuhi')
//     console.log(response)})
// .catch((error) => {
//     console.log('Tidak terpenuhi')
//     console.log(error)
// });
// janji(1);
