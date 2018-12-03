const express = require("express");
const router = express.Router();
const sellerInfoCtrl = require("../controller/sellerInfoCtrl");
const otherProductsCtrl = require("../controller/otherProductsCtrl");

//--ROUTES--//

//**SELLER INFO CONTROLLER**//

// SELLER //
router.route("/api/sellers").get(sellerInfoCtrl.sellers.get);
router.route("/api/sellerLiked/:id").patch(sellerInfoCtrl.sellers.patch);

// SELLER RATINGS //
router.route("/api/sellerRatings/:id").get(sellerInfoCtrl.sellerRatings.get);

//**SELLER PRODUCTS CONTROLLER**//

// SELLER //
router.route("/api/sellers").get(otherProductsCtrl.sellers.get);

// PRODUCT IMAGES //
router.route("/api/productImages").get(otherProductsCtrl.images.get);

// PRODUCTS //
router.route("/api/products").get(otherProductsCtrl.products.get);

module.exports = router;
