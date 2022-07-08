const crypto = require('crypto');
//change the below line of code to generate a secret key

const secret = 'a1v3b4n5m78,9o98765,m43.,3';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);
//it logs   d22f114da86624456fb053c65133a132a1b1c3fa475a95122e1692c2a79e3de8
