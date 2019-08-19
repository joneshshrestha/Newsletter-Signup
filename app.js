const config = require('./config')

//jshint esversion: 6
let API = config.API_KEY;
let KEY = config.SECRET_KEY;

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

    let data = {
        members:[
            {
            email_address: email,
            status: 'subscribed',
            "merge_fields": {
                "FNAME": firstName,
                "LNAME": lastName
                }
            }
        ]
    }

    let jsonData = JSON.stringify(data)

    let option = {
        url: 'https://us3.api.mailchimp.com/3.0/lists/' + KEY,
        method: 'POST',
        headers: {
            'Authorization': 'Jonesh ' + API
        },
        body: jsonData
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