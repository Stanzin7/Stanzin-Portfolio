const express = require("express");
const app = express();
const port = 5000;

app.use(express.static(__dirname));
app.use(port, () => console.log(`Example app listening on port ${port}!`));
