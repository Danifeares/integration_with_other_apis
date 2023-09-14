const axios = require('axios')
const apiKey = require('./apiKey')

const axiosInstance = axios.create({
  baseURL: 'https://companyenrichment.abstractapi.com/v1/',
  headers: {
    authorization: `Bearer ${apiKey}`,
    'Content-type': 'application/x-www-form-urlencoded' 
  }
})

module.exports = axiosInstance