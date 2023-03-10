// ------------------Method 1--------------- (Preferred)
// const REQUEST_TIMEOUT = 500;

// const encrypt = (data) => {
//     // encrypt data
//     return 'encrypted data'
// }

// const send = (url, data) => {
//     const encryptedData = encrypt(data)
//     // send encrypted data to url
//     console.log(`Sending ${encryptedData} to ${url}`)
//     return encryptedData
// }

// module.exports = { send, REQUEST_TIMEOUT }


//------------------Method 2-----------------

// module.exports.REQUEST_TIMEOUT = 500;

// const encrypt = (data) => {
//     // encrypt data
//     return 'encrypted data'
// }

// module.exports.send = (url, data) => {
//     const encryptedData = encrypt(data)
//     // send encrypted data to url
//     console.log(`Sending ${encryptedData} to ${url}`)
//     return encryptedData
// }



//---------------------Lesson 44---------------------

const axios = require('axios')

axios.get('https://www.google.com')
    .then((response) => {
        console.log(response);
    })
    .catch(err=>{
    console.log(err);
    })
    .then(code => {
        console.log(`All done`);
    })