const axios = require("axios");
const config = require("./config/config.js");

const params = (endpoint) => ({
  method: "get",
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/${config.CAMPUS}/${endpoint}`,
  headers: {
    Authorization: `${config.TOKEN}`,
  },
});

module.exports = {
  products: {
    getProducts: (req, res) => {
      axios(params("products"))
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
    getProductInfo: (req, res) => {
      axios(params(`products/${req.params.id}`))
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
  },
};
