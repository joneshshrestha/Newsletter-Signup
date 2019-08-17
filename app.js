//jshint esversion: 6

let express = require('express')
let request = require('request')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/signup.html')
})

app.post('/', function(req, res){
    let firstName = req.body.fName
    let lastName = req.body.lName
    let email = req.body.email

    console.log(firstName, lastName, email)
})


app.listen(3000, function(){
    console.log("Listening at PORT 3000")
})