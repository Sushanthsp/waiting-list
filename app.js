var express = require('express')
var bodyParser = require("body-parser")

var app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))

app.get('/',function(req,res){
  
 res.send('Welecome to the joinus page')

 }
 )

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
