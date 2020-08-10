function printSegitiga(num) {
    if (typeof(num)=='number') {
        for (let i = num; i >= 1; i--) {
            let item = ''
            for (let j = 1; j <= i; j++) {   
                item += j;
            }
            console.log(item)
        }
    } else {
        console.log('Input harus number')
    }
}
printSegitiga(5);

// function segitigaAngka(num) {
//     for (let i = 1; i <= num; i++) {
//         let item = ''
//         for (let j =  1; j <= i; j++) {   
//             item+=j;
//         }
//         console.log(item)
//     }
// }
// segitigaAngka(5);
// function segitigaRev(num) {
//     for (let i = 1; i <= num; i++) {
//         let item = ''
//         for (let j = num; j >= i; j--) {   
//             item+=j;
//         }
//         console.log(item)
//     }
// }
// segitigaRev(5);

