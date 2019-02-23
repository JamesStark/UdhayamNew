var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET gellery page. */
router.get('/photo-gallery', function(req, res, next) {
  res.render('gallery');
});

module.exports = router;
