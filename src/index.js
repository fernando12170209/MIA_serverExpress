/**
 * This is the backend for the React app on:
 * https://codesandbox.io/s/brave-murdock-ck6of?file=/src/App.js
 */
var express = require("express");
var path = require("path");
var app = express();
var cors = require("cors");
app.use(cors());

const port = 3100;

var corsOptions = {
  origin: "*", //"https://ck6of.csb.app/",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.static(path.join(__dirname, "build")));

app.use(
  "/api/pokeml/classify",
  express.static(path.join(__dirname, "classifier_models/original/model.json"))
);

// this is required to get access to the shards
app.use(
  "/api/pokeml",
  express.static(path.join(__dirname, "classifier_models/original"))
);

app.get("/ping", cors(corsOptions), function (req, res) {
  return res.send("pong");
});

app.get("/", cors(corsOptions), function (req, res) {
  res.send("Visit app at: https://fernando12170209.github.io/MIA/");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
