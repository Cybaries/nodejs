const request = require('./request')
const response = require('./response')

const requests = (url, data) => {
    request.send(url, data)
    return response.read()
}

console.log (requests('https://www.google.com', 'data'))