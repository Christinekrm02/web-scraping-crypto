const axios = require("axios"),
  cheerio = require("cherio");

exports.fetchData = async url => {
  let result = await axios.get(url);
};
