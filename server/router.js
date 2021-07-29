const controllers = require("./controllers.js");
const router = require("express").Router();

// Product Routes
router.route("/products").get(controllers.products.getProducts);
router.route("/products/:id").get(controllers.products.getProductInfo);
router.route("/products/:id/styles").get(controllers.products.getProductStyles);
router
  .route("/products/:id/related")
  .get(controllers.products.getRelatedProducts);

// Review Routes
router.route("/reviews/:id").get(controllers.reviews.getReviews);
router.route("/reviews/meta/:id").get(controllers.reviews.getMetadata);

// Question and Answers Routes
router.route("/qa/questions/:id").get(controllers.qa.getQuestions);
router.route("/qa/questions/:id/answers").get(controllers.qa.getAnswers);

module.exports = router;
