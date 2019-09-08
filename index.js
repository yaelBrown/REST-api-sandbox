const express = require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose");

// connect to db
mongoose.connect("mongodb://test:testuser1@ds045511.mlab.com:45511/restsandbox", {
  useNewUrlParser: true
}, (error) => (error) ? console.log(error) : console.log("connected to database"));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));