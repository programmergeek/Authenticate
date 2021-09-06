/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example listening at https://localhost:${port}`);
});
