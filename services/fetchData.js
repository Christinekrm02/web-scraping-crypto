const axios = require("axios"),
  cheerio = require("cheerio");

exports.fetchData = async url => {
  let result = await axios.get(url);
  // console.log(result);
  console.log(cheerio.load(result.data));
};
