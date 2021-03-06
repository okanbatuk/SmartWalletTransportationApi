const express = require('express')
const bodyParser = require('body-parser')
var cors  = require('cors');
const vehicles = require('./router/vehicles')
const personInfo = require('./router/person');

const port = process.env.PORT || 3000
const app = express()
app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', vehicles);
app.use('/personInfo', personInfo)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
  


