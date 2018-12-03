const Sequelize = require('sequelize');

const { connection }  = require('../config');

const User = connection.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Product = connection.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Rating = connection.define('rating', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  verified_purchase: {
    type: Sequelize.STRING,
    allowNull: false
  },
  condition: {
    type: Sequelize.STRING,
    allowNull: false
  },
  seller: {
    type: Sequelize.STRING,
    allowNull: false
  },
  likes: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dislikes: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  date: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Product.hasMany(Rating);
Rating.belongsTo(Product);

User.hasMany(Rating);
Rating.belongsTo(User);

connection.sync()
.then((() => console.log('success syncing models to the database!')))
.catch(err => console.log('error syncing models to database', err))

module.exports = {
  Rating: Rating,
  User: User,
  Product: Product
}
