var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var users = [];
  for (var i = 0; i < 100; i++ ) {
    users.push({ id: i, name: 'name' + i });
  }
  res.send(users);
});

module.exports = router;
