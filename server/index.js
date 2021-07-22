const express = require("express");
const path = require("path");
const axios = require("axios");
const config = require("./config/config.js");

const app = express();

app.use(express.static(path.join(__dirname, "/../client/dist")));

app.get("/products", (req, res) => {
  axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/${config.CAMPUS}/products`,
      {
        headers: {
          Authorization: `${config.TOKEN}`,
        },
      }
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

const port = 3000;

app.listen(port, (err) => {
  if (err) {
    console.log("Error starting server");
  }
  console.log("Server starting on port", port);
});
