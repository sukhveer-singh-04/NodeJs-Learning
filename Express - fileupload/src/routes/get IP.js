
// Import file
const dns = require('dns');
  
// dns.lookup() function searches
// for user IP address and family
// if there is no error
dns.lookup('www.w3schools.com', 
(err, addresses, family) => {
  
    // Print the address found of user
    console.log('addresses:', addresses);
  
    // Print the family found of user  
    console.log('family:', family);
});