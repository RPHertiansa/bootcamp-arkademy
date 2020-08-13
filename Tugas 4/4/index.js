//Buatlah program menggunakan method fetch untuk menampilkan semua name 
//(hanya name nya saja) dari REST API dibawah ini

//https://jsonplaceholder.typicode.com/users

const fetch =  require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(respond => respond.json())
    .then(json => console.log(json));