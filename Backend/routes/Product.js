const express = require("express");
const {
  getProducts,
  newProduct,
  getsingleProduct,
} = require("../Controllers/Productcontrollers");
const { models } = require("mongoose");
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/products/new").post(newProduct);
router.route("/product/:id").get(getsingleProduct);


module.exports = router