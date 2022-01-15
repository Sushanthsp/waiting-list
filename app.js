var express = require('express')
var bodyParser = require("body-parser")
var engine = require('ejs-locals')

var app = express()

app.engine('ejs', engine);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))


app.get("/",(req,res)=>{
    res.render('home');
    })

app.get("/thanks",(req,res)=>
    {
        res.render('thanks')
})
    
app.post("/register",(req,res)=>{
        res.redirect('/thanks')
    })

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
