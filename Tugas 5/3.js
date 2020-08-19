//Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam 
//variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. 
//Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. 
//Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa 
//bilangan integer. Buatlah method/function yang menerima parameter hanya deret angka dan menghasilkan output 
//seperti keterangan di atas.
//divideAndSort(5956560159466056)
//Output: 55566914566956

//Pseudocode
//Mulai
//Masukkan barisan bilangan
//Validasi input berupa angka
//Pisahkan barisan angka berdasarkan angka 0
//Urutkan bilangan di antara angka 0
//Kembalikan angka 0 pada barisan bilangan
//Cetak barisan bilangan yang telah diurutkan
//Selesai

const divideAndSort = (num) => {
    if (typeof num === 'number') {
        let numToString = num.toString().split("0"); //mengubah jadi array, memisahkan berdasarkan 0
        
        let result = ''
        
        numToString.map(x => { //array sudah dipisahkan dari 0, diurutkan pada masing-masing index    
            let sorted = x.split("").sort().join("")
            result += sorted              
        });
        
        console.log(result)
    } else {
        console.log('Input harus angka')
    }
}

divideAndSort(5956560159466056); //55566914566956
divideAndSort(5010251030405); //51125345
divideAndSort('5956560159466056');