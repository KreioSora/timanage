const express = require('express');
const app = express();
const port = 3000;

// Middlewares
const routers = require("./src/routers/routers.js");

app.use("/", routers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})