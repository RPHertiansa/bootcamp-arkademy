//Reverse word
const reverseWord = (word) => {
    let x = word.split(" ").reverse().join(" ")
    console.log(x)
}

reverseWord("saya belajar javascript");
reverseWord("selamat pagi selamat siang")