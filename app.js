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


app.listen(3000, function(){
    console.log("Listening at PORT 3000")
})