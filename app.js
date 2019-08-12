let express = require('express')
let request = require('request')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function(){
    console.log("Listening at PORT 3000")
})