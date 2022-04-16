const express = require('express')
let app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 3352;
const morgan = require("morgan")
const cors = require("cors")

app.use(morgan('dev'));
app.use(bodyParser.json()); // support json encoded bodies
//app.use(urlencoded({ extended: true})); // support encoded bodiesbodyParser.

app.use(cors())

require('./routes/index')(app)








app.listen(port, () => {
    console.log(port)
})