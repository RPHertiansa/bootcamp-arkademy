// Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan 
// callback function dengan data sebagai berikut:

let name = [
'Abigail', 'Alexandra', 'Alison',
'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn',
'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (word, num, limit) => {
    const names = name.filter(name => name.includes(word))
    console.log(limit(names, num))
}
const limit = (names, num) => {
    return names.filter((tes, i) => {
        if(i < num) {
            return true
        }
    })
}
searchName('an', 10, limit);