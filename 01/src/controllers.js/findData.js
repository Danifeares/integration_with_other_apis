const getCompany = require('../abstract')
const fs = require('fs/promises')

const findData = async (req, res) => {
  const { dominioEmpresa } = req.query
  try {
    const data = await getCompany(dominioEmpresa)

    if (data.name !== null && data.name !== undefined) {
      const dataJSON = await fs.readFile('./01/src/companies.json')

      if (dataJSON.length > 0) {
        const dataARRAY = JSON.parse(dataJSON)
        const companyAlreadyExists = dataARRAY.find((company) => {
          return company.domain === String(dominioEmpresa)
        })
        if (!companyAlreadyExists) {
          dataARRAY.push(data)
          await fs.writeFile('./01/src/companies.json', JSON.stringify(dataARRAY))
        }
      } else {
        const dataARRAY = []
        dataARRAY.push(data)
        await fs.writeFile('./01/src/companies.json', JSON.stringify(dataARRAY))
      }
    } 
    
    return res.json(data)
    
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: 'Internal server error.'})
  }
}

module.exports = findData