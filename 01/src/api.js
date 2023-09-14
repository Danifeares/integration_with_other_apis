const axios = require('axios')
const apiKey = require('./apiKey')

const axiosInstance = axios.create({
  baseURL: 'https://companyenrichment.abstractapi.com/v1',
  params: {
    api_key: apiKey
  }
})

module.exports = axiosInstance