var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET about page. */
router.get('/about-us', function(req, res, next) {
  res.render('about');
});

/* GET gellery page. */
router.get('/photo-gallery', function(req, res, next) {
  res.render('gallery');
});

/* GET team page. */
router.get('/tech-team', function(req, res, next) {
  res.render('techteam');
});

/* GET coordinator page. */
router.get('/event-coordinators', function(req, res, next) {
  res.render('coordinators');
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
