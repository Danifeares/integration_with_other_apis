const axiosInstance = require('./api')

const getCompany = async (dominioEmpresa) => {
  const { data } = await axiosInstance.get(
    '',
    {
      params: {
        domain: dominioEmpresa
      }
    }
  )

  return data
}

module.exports = getCompany