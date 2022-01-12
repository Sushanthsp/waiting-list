var express = require('express')
var mysql = require('mysql')
var bodyParser = require("body-parser")

var app = express()
const port = process.env.PORT || 3000 ;
app.get('/', (req,res) => {
    res.send('Welcome to Daily Code Buffer in Heroku Auto Deployment!!');
})


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'joinus',   
    password : 'password' 
});

app.get('/',function(req,res){
   var q = 'SELECT COUNT(*) AS count FROM users';
   connection.query(q, function(err,results)
   {
       if(err) throw err
       var count = results[0].count;
       res.render("home" , {count : count})
res.send('Welecome to the joinus page')
   })
}
)

app.get('/thanks',function(req,res){
    var q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q, function(err,results)
    {
        if(err) throw err
        var count = results[0].count;
        res.render("thanks" , {count : count})
    })
    console.log("Working")
 }
 )

app.post("/register", function(req, res)
{
    var person ={
        email : req.body.email
    };
    connection.query('INSERT INTO users SET ?',person, function(err, result)
    {
        if(err) throw err;
        res.redirect('/thanks')
    })
    console.log("Working")
}
)

app.listen(port, () => console.log('Local app listening on port 3000!'));

