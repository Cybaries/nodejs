const REQUEST_TIMEOUT = 500;

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

export { send, REQUEST_TIMEOUT }