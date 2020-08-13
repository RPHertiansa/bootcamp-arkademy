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
                reject('Hari ini bukan hari kerja')
            }
        }, 1000);
    });
};

const displayHari = async(day) => {
    try {
        const hasil = await cekHariKerja(day)
        console.log(`Hari ini adalah hari ${hasil}`)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Selesai. Semoga hari ini menyenangkan")
    }
};

displayHari('senin')
displayHari('minggu')
// const doAsync = (status) => {
    
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if(status){
//                 resolve('Hello Arkademy')
//             } else {
//                 reject('Error')
//             }
//         }, 2000);
//     })
// };
// const helloWorld = async(status) => {
//     try{
//         const result = await doAsync(status)
//         console.log(result)
//     } catch(error){
//         console.log(error)
//     } finally{
//         console.log('selesai')
//     }
// }
// helloWorld(true);
// helloWorld(false);