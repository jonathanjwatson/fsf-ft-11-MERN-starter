const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurantsController");

// Matches with "/api/restaurants"
router
  .route("/")
  .get(restaurantsController.findAll)
  .post(restaurantsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(restaurantsController.findById)
  .put(restaurantsController.update)
  .delete(restaurantsController.remove);

module.exports = router;
