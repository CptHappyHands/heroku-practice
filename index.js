require("dotenv").config(); // this allows to stash artificial enc cariables in a file
const express = require("express");

const server = express();

const PORT = process.env.PORT || 5000;

console.log(process.env.API_SECRET);

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h1>We did it!</h1>`);
});

server.get("/api", (req, res) => {
  res.json({ message: "Yeah, we did do it" });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
