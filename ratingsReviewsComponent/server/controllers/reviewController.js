const { User, Rating, Product } = require('../../db/schemas')
const { connection } = require('../../db/config')

const reviewController = {
  get: (req, res) => {
    connection.query('select * from ratings')
    .then(( data ) => {
      res.status(200).send(data[0])
    })
    .catch(err => {
      console.log('err with query in controller')
    })
  },
  fetchUser: (req, res) => {
    connection.query('select name from users where id = (select "userId" from ratings where id = ?)', {replacements: [1]})
    .then(( data ) => {
      console.log('data from fetch user', data)
      res.status(200).send(data)
    })
    .catch(err => {
      console.log('err with query in controller fetchUser')
    })
  },
  post: (req, res) => {

  }
}

module.exports = {
  reviewController
}