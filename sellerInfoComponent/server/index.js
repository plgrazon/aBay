const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const router = require("./router");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../static")));

app.use("/", router);

app.listen(PORT, () => console.log(`Server Listening On ${PORT}...`));
