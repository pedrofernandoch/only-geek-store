const express = require('express')
const cors = require('cors')
const consign = require('consign')
const db = require('./config/db')
const app = express()
const PORT = 3003

app.db = db
app.use(express.json())
app.use(cors())

consign()
    // .include('./config/passport.js')
    .include('./api/utils/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(PORT, () => {
    console.log("Backend runnig...")
})