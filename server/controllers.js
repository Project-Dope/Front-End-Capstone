const axios = require("axios");
const config = require("./config/config.js");

const configuration = (endpoint, method, queryParams) => ({
  method: method,
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/${config.CAMPUS}/${endpoint}`,
  headers: {
    Authorization: `${config.TOKEN}`,
  },
  params: queryParams,
});

module.exports = {
  products: {
    getProducts: (req, res) => {
      axios(configuration("products", "get"))
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
    getProductInfo: (req, res) => {
      axios(configuration(`products/${req.params.id}`, "get"))
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
    getProductStyles: (req, res) => {
      axios(configuration(`products/${req.params.id}/styles`, "get"))
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
    getRelatedProducts: (req, res) => {
      axios(configuration(`products/${req.params.id}/related`, "get"))
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
  },
  reviews: {
    getReviews: (req, res) => {
      queryParams = {
        count: 20,
        product_id: req.params.id,
      };
      axios(configuration(`reviews/`, "get", queryParams))
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
    getMetadata: (req, res) => {
      queryParams = {
        product_id: req.params.id,
      };
      axios(configuration(`reviews/meta`, "get", queryParams))
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
  },
  qa: {
    getQuestions: (req, res) => {
      queryParams = {
        product_id: req.params.id,
      };
      axios(configuration("qa/questions", "get", queryParams))
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
    getAnswers: (req, res) => {
      axios(configuration(`qa/questions/${req.params.id}/answers`, "get"))
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
    updateQuestionHelpfulness: (req, res) => {
      axios(configuration(`qa/questions/${req.params.id}/helpful`, "put"))
        .then((response) => {
          res.status(200).send();
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
    updateAnswerHelpfulness: (req, res) => {
      axios(configuration(`qa/answers/${req.params.id}/helpful`, "put"))
        .then((response) => {
          res.status(200).send();
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    }

    // postQuestions:

    // postAnswers:

    //
  },
};
