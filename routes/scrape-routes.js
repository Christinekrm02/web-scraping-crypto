const router = require("express").Router();
const { scrapedData } = require("../controller/scrape-controllers");

router.route("/").get(scrapedData);

module.exports = router;
