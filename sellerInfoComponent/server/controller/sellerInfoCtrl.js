const { Seller, SellerRating } = require("../../db/schema/schema");

const sellerInfoCtrl = {
  sellers: {
    get: (req, res) => {
      Seller.findAll({ attributes: ["id", "name", "email", "isLiked"] }).then(
        data => {
          res.send(data);
        }
      );
    },
    patch: (req, res) => {
      Seller.findOne({
        where: { id: 1 }
      }).then(data => {
        data.updateAttributes({ isLiked: !data.isLiked }).then(() => {
          res.send(data);
        });
      });
    }
  },
  sellerRatings: {
    get: (req, res) => {
      SellerRating.findOne({
        attributes: ["id"],
        order: [["id", "DESC"]]
      }).then(data => {
        let sendData = [data];
        SellerRating.findAll({
          attributes: ["rating"]
        }).then(data => {
          sendData.push(
            data.reduce((acc, rating) => {
              acc += rating.dataValues.rating;
              return acc;
            }, 0)
          );
          sendData.push(sendData[1] / sendData[0].dataValues.id / 5 * 100);
          res.send(sendData);
        });
      });
    }
  }
};

module.exports = sellerInfoCtrl;
