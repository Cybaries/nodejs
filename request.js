
const encrypt = (data) => {
    // encrypt data
    return 'encrypted data'
}

const send = (url, data) => {
    const encryptedData = encrypt(data)
    // send encrypted data to url
    console.log(`Sending ${encryptedData} to ${url}`)
    return encryptedData
}

module.exports = { send }