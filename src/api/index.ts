const axios = require('axios');

axios.interceptors.request.use(
   (config: any) => config,
   (error: any) => Promise.reject(error)
)
axios.interceptors.response.use(
    (response: any) => response,
    (error: any) => Promise.reject(error)
)
axios.defaults.timeout = 60000

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