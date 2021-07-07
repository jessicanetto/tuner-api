const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songsController");
const { response } = require("express");

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Welcome to the Tuner");
});
app.get("/songs", (request, response) => {
  response.send("Here are songs: ");
});
app.listen(3001, () => {
  console.log("I am listening for requests on port 3001!");
});
app.get("*", (request, response) => {
  response.status(404).send("Page not Found");
});
module.exports = app;
