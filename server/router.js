const controllers = require("./controllers.js");
const router = require("express").Router();

router.route("/products").get(controllers.products.getProducts);

router.route("/products/:id").get(controllers.products.getProductInfo);

module.exports = router;
