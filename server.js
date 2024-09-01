const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const login = require("./files/login.js");
const index = require("./files/index.js");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(login);
app.use(index);



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
