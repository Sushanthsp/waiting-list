var express = require('express')
// var mysql = require('mysql')
// var bodyParser = require("body-parser")

var app = express()
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render("home");
})

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
