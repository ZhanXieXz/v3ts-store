const axios = require('axios');

const apiGet = (url: string, params: object) => {
    return new Promise ((resolve, reject) => {
        axios.get(url, params).then(function (response: object) {
            resolve(response)
        })
        .catch(function (error: object) {
            reject(error)
        })
    })
}

export { apiGet }