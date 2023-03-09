import {send} from './37-request.mjs'
import {read} from './37-response.mjs'

const requests = (url, data) => {
    send(url, data)
    return read()
}

console.log (requests('https://www.google.com', 'data'))