const express = require("express");
const app = express();
const morgan = require("morgan");
const config = require("config");
const mongoose = require("mongoose");

const routes = require("./routes");

app.use(morgan("dev"));
app.use(express.json());

app.use(routes);

app.get("/", (req, res) => {
  res.send("App is running");
});

mongoose
  .connect(config.get("dev.db"), { useNewUrlParser: true })
  .then(console.log("Connected to mongo DB"))
  .catch(err => console.error("Cannot connect to Mongo DB", err));

const PORT = config.get("dev.port") || 5000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
