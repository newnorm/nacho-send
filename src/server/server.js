const express = require('express')
const app = express()
const api = require('./routes')
const cors = require('cors')

app.use(cors())
app.use('/api', api)

const port = 300
app.listen(port, ()=>{console.log(`listening on port ${port}`)})
