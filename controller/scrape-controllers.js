const { fetchData } = require("../services/fetchData");
exports.scrapedData = async (req, res) => {
  fetchData("https://finance.yahoo.com/cryptocurrencies");
  // res.status(200).json({ msg: "scrape controller" });
};
