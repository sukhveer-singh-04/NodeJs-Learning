const url = require('url');
// const app = express();

const urll = url.parse("https://mail.google.com/mail/u/0/#inbox");

console.log(urll);
console.log(urll.pathname);
console.log(urll.href);
console.log(urll.hostname);
console.log(urll.hash);
console.log(urll.protocol);
console.log(urll.query);

// const myURL = new URL('https://mail.google.com/mail/u/0/#inbox');
// console.log("3 =>", myURL.href)