var express = require('express')
var router = express.Router()

router.get('/',function (req, res) {
  res.send({greeting:"Hello react x node js"})
})

router.get('/chat',function (req, res) {
  res.send({greeting:"enter the chat room"})
})


module.exports = router;
