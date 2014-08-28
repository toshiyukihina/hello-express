var express = require('express');
var router = express.Router();

var log4js = require('log4js');
var logger = log4js.getLogger();

router.get('/:id', function(req, res, next) {
  //logger.info(req.params);
  //res.send('apps');
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
