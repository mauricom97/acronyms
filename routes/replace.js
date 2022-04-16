const replace = require("../controllers/replace")


const express = require('express')

var router = express.Router();

router.post("/", replace)


module.exports = router