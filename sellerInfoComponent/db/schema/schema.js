const Sequelize = require("sequelize");
const { db } = require("../config");

const Product = db.define("product", {
  name: Sequelize.STRING,
  price: Sequelize.DOUBLE,
  description: Sequelize.STRING,
  sellerId: Sequelize.INTEGER,
  imageId: Sequelize.INTEGER
});

const Seller = db.define("seller", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  isLiked: { type: Sequelize.BOOLEAN, defaultValue: false }
});

const SellerRating = db.define("seller_rating", {
  user: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  sellerId: Sequelize.INTEGER
});

const Image = db.define("image", {
  imageUrl: Sequelize.STRING,
  productId: Sequelize.INTEGER
});

module.exports = {
  Product,
  Seller,
  SellerRating,
  Image
};
