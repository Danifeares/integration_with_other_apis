const getCompany = require('../abstract')

const findData = async (req, res) => {
  const { dominioEmpresa } = req.query
  const data = await getCompany(dominioEmpresa)
  return res.json(data)
}

module.exports = findData