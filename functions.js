const axios  = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    // add: function(num1, num2){
    //     return num1 + num2;
    // }
    isNull: () => null,
    checkValue: (value) => value,
    createUser: () => {
        const user = {firstName: 'AbdElAziz'};
        user['lastName'] = 'Zaki';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
}


module.exports = functions;