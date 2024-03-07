var express = require('express');
var router = express.Router();
var db = require('../queries/test');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express JS Index' });
});

router.get('/test-connection', db.testConnection);

module.exports = router;
