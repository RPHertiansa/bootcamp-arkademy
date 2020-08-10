// Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan  callback function dengan data sebagai berikut:
const name = [
'Abigail', 'Alexandra', 'Alison',
'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn',
'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope']

function searchName(word) {
    if (search(word) == -1) {
        console.log("not found")
    } else {
        console.log('found')
    }
}

searchName('an');
// Contoh:
// searchName('an', 3, callback)

// Output: 
// ['Alexandra','Amanda','Angela']
