const { send, read } = require('./internals')

const requests = (url, data) => {
    send(url, data)
    return read()
}

console.log (requests('https://www.google.com', 'data'))