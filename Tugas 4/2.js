//Buat program menggunakan callback function untuk melanjutkan dan menampilkan 
//semua bulan menggunakan method map

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
        if(!error){
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000);
};