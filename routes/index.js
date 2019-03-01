var express = require("express");
var router = express.Router();
var sendEmail = require("../sendEmail").sendEmail;
let events = {
  ppt: {
    rules: ["Max 2 members per team", "Each team will be given 10 mins for presenting their papers.","All paper should be submitted in udhayamkitppt@gmail.com","LASTE DATE FOR SUBMISSION :06/03/2019"],
    location: "CSE-E301, Mech – W301, EEE – E204, ECE-W401, W402, AERO-BIOMEDICAL, AGRI, BIOTECH - SMART CLASS ROOM",
    eventName: "Paper Presentation",
    time: "10:00 AM"
  },
  hackit: {
    rules: ["Hints will be provide", "Browsing leads to disqualification"],
    location: "",
    eventName: "Hack It",
    time: "11.00 am"
  },
  cad: {
    rules: ["2 or 3 members per team", "LEVEL 1: 30 mins time duration", "LEVEL 2: 45 mins duration", "Designs will be given on the spot", "Basic knowledge in solid Works."],
    location: "CAD CAM LAB (E09)",
    eventName: "CAD MODELING",
    time: "10:30 AM"
  },
  glidermodel: {
    rules: ["2 or 3 members per team", "LEVEL1: Range", "LEVEL2: Endurance"],
    location: "Basketball Court",
    eventName: "GLIDER MODELING",
    time: "10:30 AM"
  },
  aquathruster: {
    rules: ["Individual Participants", "LEVEL1: Range", "LEVEL2 : Endurance"],
    location: "Main Ground",
    eventName: "AQUA THRUSTER",
    time: "11.00 AM"
  },
  medconnexus: {
    rules: ["2 or 3 members per team", "LEVEL 1: Connection", "LEVEL 2: Connect to win it", "Smart phones are prohibited.", "Duration for each Clue is 60 sec"],
    location: "C202",
    eventName: "MED-CONNExus",
    time: "10:30 AM"
  },
  biomatch: {
    rules: ["2 or 3 members per team", "LEVEL 1: Catch the match", "LEVEL 2: Inter team match", "Duration for each Clues is 60 sec"],
    location: "C205",
    eventName: "BIO-MATCH",
    time: "11.00 AM"
  },
  fermentrace: {
    rules: ["2 or 3 members per team", "Avoid usage of mobile phones."],
    location: "C204",
    eventName: "FERMENT RACE",
    time: "10:30 AM"
  },
  biopic: {
    rules: ["Idea must be unique.", "Don’t copy Pic/video from internet.", "Models/Pictures should be on your own"],
    location: "C201",
    eventName: "BIO PIC",
    time: "11.00 AM"
  },
  mrmechanic: {
    rules: ["2 or 3 members per team", "LEVEL 1: 10 mins", "LEVEL 2: Components disassembling + viva voce"],
    location: "PRODUCT DEVELOP MENT CELL (W111)",
    eventName: "Mr. MECHANIC",
    time: "10:30 AM"
  },
  startupceo: {
    rules: ["2 or 3 members per team", "Rounds will be designed to test your Entrepreneurship Skills", "Idea must be unique"],
    location: "W303",
    eventName: "STARTUP CEO",
    time: "11.00 AM"
  },
  circuitdebugging: {
    rules: ["Max 2 members per team", "Time limits will be given", "Judgement based on time"],
    location: "MEASUREMENT AND INSTRUMENTATION LABORATORY",
    eventName: "CIRCUIT DEBUGGING",
    time: "10.30 AM"
  },
  crazybrain: {
    rules: ["Max 2 members per team", "Round:1-full circuit will be given to observe the missing electronic components", "Round :2-participants should identify the missing electronic components where that can be matched in correct manner"],
    location: "W409(on lab)",
    eventName: "CRAZY BRAINY",
    time: "11.00 AM"
  },
  hiddensearch: {
    rules: ["2 or 3 members per team", "Round:1-components will be displayed participants have to find the name of the components.", "Round:2-Image will be cut into segments and displayed with numbering"],
    location: "W404(MPMC Lab)",
    eventName: "TECH HIDDEN SEARCH",
    time: "11:30 am"
  },
  technofusion: {
    rules: ["2 or 3 members per team", "Time limits will be given", "Browsing leads to disqualification"],
    location: "E 201",
    eventName: "TECHNO FUSION",
    time: "10:30 am"
  },
  codedebugging: {
    rules: ["TIME LIMITS WILL BE GIVEN", "Basic language c++, c & java 2 rounds", "Time limit: round 1:30 mins Round2:45 mins"],
    location: "",
    eventName: "CODE DEBUGGING",
    time: "10:30 am"
  },
  irrdesign: {
    rules: ["2 or 3 members per team", "DON’T COPY FROM EQUIPMENT"],
    location: "",
    eventName: "IRRIGATION DESIGNING",
    time: "10:30 am"
  },
  futurefood: {
    rules: ["2 or 3 members per team", "MODEL SHOULD BE BRING ON YOUR OWN"],
    location: "",
    eventName: "FUTURE FOOD",
    time: "11.30 am"
  },
  biopic: {
    rules: ["2 or 3 members per team"],
    location: "C202",
    eventName: "BIO-PIC",
    time: "10:30 am"
  },
  brandrice: {
    rules: ["2 or 3 members per team", "IDEA MUST BE UNIQUE INNOVATION ARE APPRECIATED"],
    location: "C306",
    eventName: "BRAND RACE",
    time: "11:00 am"
  },
  admad: {
    rules: ["2 or 3 members per team", "MOBILE PHONES ARE PROHIBITED", "ADDITIONAL PROPERTIES CAN BE USED"],
    location: "C301",
    eventName: "AD-MAD",
    time: "10:30 am"
  },
  thinklink: {
    rules: ["2 members per team", "TIME LIM ITS WILL BE GIVEN FOR EACH LEVELS"],
    location: "E 202",
    eventName: "THINK AND LINK",
    time: "11:00 am"
  },
  posterdesign: {
    rules: ["AVOID USAGE OF MOBILE PHONES AND PENDRIVES", "TOPICS WILL BE GIVEN ON THE SPOT", "DESIGNING SHOULD BE DONE ONLY BY PHOTOSHOP IN OUR LAB", "JURIES DECISION WILL BE FINAL"],
    location: "E 202",
    eventName: "POSTER DESIGNING",
    time: "11:00 am"
  },
  mime: {
    rules: ["Minimum of 5 members per team.", "Duration 6mins.", "Decision will be based on theme."],
    location: "Old auditorium",
    eventName: "MIME",
    time: "10.30 AM"
  },
  vocal: {
    rules: ["Solo or group participants.", "Instruments should be brought by their own", "duration should be 6 mins"],
    location: "Main auditorium",
    eventName: "VOCAL",
    time: "11.30AM"
  },
  solodance: {
    rules: ["Avoid using color powder, fire and snake dance.", "Duration of song will be minimum of 3 mins.", "Bring songs in pendrive.", "No vulgarity in songs."],
    location: "Main auditorium",
    eventName: "SOLO DANCE",
    time: "10.30 AM"
  },
  grpdance: {
    rules: ["Minimum of 4 participants can perform in a team.", "Avoid using color powder, fire and snake dance", "No vulgarity in songs."],
    location: "Main auditorium",
    eventName: "GROUP DANCE",
    time: "1.00 PM"
  },
  facepainting: {
    rules: ["2 members per team", "On the spot topic will be given", "Participants should bring their own colors and brushes."],
    location: "Old auditorium",
    eventName: "FACE PAINTING",
    time: "10.30 AM"
  },
  shortfilm: {
    rules: ["Duration maximum 15 mins.", "Priorities will be given for Good quality video.", "Video that are presented should be owned by participants.", "Restriction: Violence, Adult content."],
    location: "Conference hall",
    eventName: "SHORT FILM",
    time: "10.30 AM"
  },
  dumbcharades: {
    rules: ["Two members per team", "Time limits will be given"],
    location: "W404",
    eventName: "DUMB CHARADES",
    time: "11.00 AM"
  },
  treasurehunt: {
    rules: ["Round1-tiktok math", "Round2-stranger the back", "Round3-ball in mountain run    run run"],
    location: "",
    eventName: "TREASURE HUNT",
    time: "11.30 AM"
  },
  gaming: {
    rules: ["2 members per team", "DISCUSSION SHOULD NOT BE MADE WITH ANOTHER TEAM", "JUDGEMENT WILL BE BASED ON TIME AND POINTS SCORED"],
    location: "E304, E305",
    eventName: "GAMING-TRACE THE TIP",
    time: "1.00 PM"
  },
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
    time: events[req.params.event].time,
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