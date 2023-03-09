const {send} = require('./request')
const {read} = require('./response')

const requests = (url, data) => {
    send(url, data)
    return read()
}

console.log (requests('https://www.google.com', 'data'))