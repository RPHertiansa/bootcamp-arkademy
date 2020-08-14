//Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

//Cek bilangan ganjil dan genap
const cekGanjilGenap = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 == 0) {
                resolve(num)
            } else {
                reject(num)
            }
        }, 1000);
    });
};

const displayAngka = async(num) => {
    try {
        const hasil = await cekGanjilGenap(num)
        console.log(`${hasil} adalah bilangan Genap`)
    } catch (error) {
        console.log(`${error} adalah bilangan Ganjil`)
    } finally {
        console.log("Selesai.")
    }
};
displayAngka(1);
displayAngka(2);


//cek waktu dan mengembalikan salam
const cekWaktu = (waktu) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof waktu == "number") {
                if (waktu >= 0 && waktu <= 10) {
                    resolve("Pagi!");
                } else if (waktu >= 11 && waktu <= 14) {
                    resolve("Siang!");
                } else if (waktu >= 15 && waktu <= 18) {
                    resolve("Sore!");
                } else if (waktu >= 19 && waktu <= 24) {
                    resolve("Malam!");
                } else {
                    reject("Waktu salah");
                }
            } else {
                reject("Input salah")
            }
        }, 1000);
    });
};

const ucapkanSalam = async(waktu) => {
    try {
        const hasil = await cekWaktu(waktu)
        console.log(`Selamat ${hasil} sekarang jam ${waktu}.00`)
    } catch (error) {
        console.log(`${error} periksa kembali input`)
    } finally {
        console.log("Selesai.")
    }
};

ucapkanSalam('10');
ucapkanSalam(20);
ucapkanSalam(30);