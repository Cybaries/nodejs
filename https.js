const https = require('https')

https.request('https://www.google.com', (res) => {
    res.on('data', (data) => {
        console.log(data)
    })
    res.on('end', () => {
        console.log('No more data in response.')
    })
}).end();



