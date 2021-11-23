const router = require("express").Router();
const restaurantRoutes = require("./restaurants");

router.use("/restaurants", restaurantRoutes);

module.exports = router;
