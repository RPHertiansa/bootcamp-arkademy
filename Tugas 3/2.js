// Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan 
// callback function dengan data sebagai berikut:

let name = [
'Abigail', 'Alexandra', 'Alison',
'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn',
'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (word, num, getResult) => {
    const names = name.filter(name => name.toLowerCase().includes(word.toLowerCase()))
    const sorted = names.slice(0, num);
    getResult(sorted); 
}

const getResult = (sorted) => {
    console.log(sorted)
}
searchName('an', 5, getResult);