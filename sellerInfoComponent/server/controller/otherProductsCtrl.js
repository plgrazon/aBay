const { Seller, Image, Product } = require("../../db/schema/schema");

const sellerInfoCtrl = {
  sellers: {
    get: (req, res) => {
      Seller.findAll({ attributes: ["id"] }).then(data => {
        res.send(data);
      });
    }
  },
  images: {
    get: (req, res) => {
      Image.findAll({
        attributes: ["productId", "imageUrl"]
      }).then(data => {
        let processedIds = {};
        let newData = data.reduce((acc, image) => {
          if (!processedIds[image.dataValues.productId]) {
            processedIds[image.dataValues.productId] =
              image.dataValues.productId;
            acc.push(image);
          }
          return acc;
        }, []);
        res.send(newData);
      });
    }
  },
  products: {
    get: (req, res) => {
      Product.findAll({
        attributes: ["price", "description", "name"]
      }).then(data => {
        res.send(data);
      });
    }
  }
};

module.exports = sellerInfoCtrl;
