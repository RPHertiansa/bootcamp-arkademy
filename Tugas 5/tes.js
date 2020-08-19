//input harus integer(number)
// 0 merupakan pemisah antar bilangan
// bilangan di sort dan dipisah berdasarkan bilangan itu sendiri
//putput harus integer

const divideSort = number => {
    if(typeof number !== 'number'){
        console.log('Inputan harus Number')
    } else {
        const x = number.toString().split('0')
        let hasil = ''
        for(let i=0; i<x.length; i++){
            let output = x[i].split('').sort().join('')
            hasil += output
        }
        console.log(hasil)
    }
}

divideSort(595656015946056)
divideSort('595656015946056')