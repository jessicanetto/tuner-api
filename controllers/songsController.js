const express = require("express");
const songs = express.Router();

songs.get("/", (request, response) => {
  response.json({ status: "ok" });
});

module.exports = songs;
