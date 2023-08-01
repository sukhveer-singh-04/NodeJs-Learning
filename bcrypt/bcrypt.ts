import bcrypt from 'bcrypt';

let hashResult1: string;
let hashResult2: string;

const saltRounds: any = 10;
const password: any = 'Asdf_!@123456';


//  Method 1 : 
bcrypt.genSalt(saltRounds).then((salt: any) => {
    // console.log(salt);
    return bcrypt.hash(password, salt)
}).then((hash: any) => {
    console.log('hash1 - ', hash)
    hashResult1 = hash;
});


setTimeout(() => {
    bcrypt.compare(password, hashResult1).then(function (result) { console.log('Result 1- ', result) })
        .catch(function (err) { console.error(err.message) });
}, 1000);




//  Method 2 : 
setTimeout(() => {
    bcrypt.hash(password, saltRounds).then(hash => {
        hashResult2 = hash;
        console.log('hash2- ', hashResult2);
    })
        .catch(err => console.error(err.message));

}, 3000);



setTimeout(() => {
    bcrypt.compare(password, hashResult1).then(function (result) { console.log('Result 2- ', result) })
        .catch(function (err) { console.error(err.message) });
}, 5000);
