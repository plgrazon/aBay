const { User, Rating, Product } = require('../../db/schemas')
const { connection } = require('../../db/config')

const averageRatingController = {
  get: (req, res) => {
    connection.query('select stars from ratings')
    .then(( data ) => {
      res.status(200).send(data[0])
    })
    .catch(err => {
      console.log('err with query in controller')
    })

  },
  post: (req, res) => {

  }
}

module.exports = {
  averageRatingController
}