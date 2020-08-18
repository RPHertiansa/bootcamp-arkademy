//Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam 
//variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. 
//Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. 
//Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa 
//bilangan integer. Buatlah method/function yang menerima parameter hanya deret angka dan menghasilkan output 
//seperti keterangan di atas.

//Pseudocode
//Masukkan barisan bilangan
//Deteksi angka 0
//Pisahkan barisan angka berdasarkan angka 0
//Urutkan bilangan di antara angka 0
//Kembalikan angka 0 pada barisan bilangan
//Cetak barisan bilangan yang telah diurutkan

const divideAndSort = (num) => {
    let x = num.toString().split("");

    let a = x.sort((function(a, b){return a-b}))
    let joinedNumber = a.join("")
    console.log(joinedNumber);
}

divideAndSort(5956560159466056);