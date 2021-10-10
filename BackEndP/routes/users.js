var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/home', function(req, res) {
  res.send("Hello This is index Page");
});
module.exports = router;
