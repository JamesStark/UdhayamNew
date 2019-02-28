var express = require("express");
var router = express.Router();
var sendEmail = require("../sendEmail").sendEmail;
let events = {
  hackit: {
    rules: ["Break the rules", "No way"],
    location: "Somewhere in the college",
    eventName: "Hack It"
  }
}
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

/* GET about page. */
router.get('/about-us', function(req, res, next) {
  res.render('about');
});

/* GET about page. */
router.get("/events", function (req, res, next) {
  res.render("events");
});

router.get("/events/:event", function (req, res, next) {
  let rules = "";
  events[req.params.event].rules.map((e, i) =>
    rules = rules + "".concat(`${i + 1}. `, e, "<br/>")
  )
  res.render("eventRules", {
    rules,
    location: events[req.params.event].location,
    eventName: events[req.params.event].eventName
  })
})
/* GET gellery page. */
router.get("/photo-gallery", function (req, res, next) {
  res.render("gallery");
});

/* GET team page. */
router.get("/tech-team", function (req, res, next) {
  res.render("techteam");
});

/* GET coordinator page. */
router.get("/event-coordinators", function (req, res, next) {
  res.render("coordinators");
});

/* GET contact page. */
router.get('/event-register', function(req, res, next) {
  res.render('register');
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post("/contact", function (req, res, next) {
  sendEmail(req.body.email, req.body.name, req.body.msg, req.body.subject);
  res.send({
    result: "sari pa thambi poi pori kadalai vaangi saptutu wait pannu annathai respond pannuvaru"
  })
});

module.exports = router;