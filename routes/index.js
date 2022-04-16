const replace = require("./replace")

const bodyParser = require('body-parser')

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: true })


module.exports = (app) => {
    app.use("/replace", jsonParser, urlencodedParser, replace);
}