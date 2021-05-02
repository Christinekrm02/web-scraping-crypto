const { fetchData } = require("../services/fetchData");

exports.scrapedData = async (req, res) => {
  let stocks = [];
  const cryptoData = await fetchData(
    "https://finance.yahoo.com/cryptocurrencies"
  );
  cryptoData("body")
    .find("#scr-res-table > div > table > tbody > tr")
    .each((i, element) => {
      const img = cryptoData(element).find("img").attr("src");
      const abbr = cryptoData(element).find("a").text();
      const name = cryptoData(element).find("img").attr("alt");
      const price = cryptoData(element).children()[2].children[0].children[0]
        .data;
      console.log(price);
      const info = { img, abbr, name, /*price: parseFloat(price)*/ price };
      stocks.push(info);
    });
  res.status(200).json({ stocks });
  /*res.status(200).json({
    cryptoData: cryptoData("body")
      .find("#scr-res-table > div > table > tbody")
      .html(),
  }); */
};
