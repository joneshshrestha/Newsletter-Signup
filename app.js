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

    let option = {
        url: 'https://us3.api.mailchimp.com/3.0/lists/f68a58c0cf',
        method: 'POST',

    }

    request(option, function(error, response, body) {
        if(error) {
            console.log(error)
        } else {
            console.log(response.statusCode)
        }
    })
})


app.listen(3001, function(){
    console.log("Listening at PORT 3000")
})

//API KEY
//b8f9e122cea0c5e6ad7605807087a8a2-us3
//f68a58c0cf