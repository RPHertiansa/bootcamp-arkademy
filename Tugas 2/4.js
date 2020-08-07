let data = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874'
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
};

let dataSaya = {...data, name: 'Reynaldi Putra', email: 'reyhertiansa@gmail.com', hobby: 'nonton film'};
const {address} = data;
const {street, city} = address;

console.log(dataSaya);
console.log(street);
console.log(city);