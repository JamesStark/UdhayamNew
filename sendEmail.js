let mailer = require("nodemailer");
let config = require("./config");

exports.sendEmail = (to, name, msg, subject) => {
  var trans = mailer.createTransport({
    service: config.mail.service,
    auth: {
      user: config.mail.user,
      pass: config.mail.pass
    }
  });

  var mailOptions = {
    from: "KIT UDHAYAM 2K19" + `<${config.mail.user}>`,
    to: [to, config.mail.user],
    cc: to,
    subject: subject || "Complaint Registered",
    text: `HI ${name}`,
    html: `<div style="margin:40px 22% 40px 22%;padding: 20px; border: 2px solid #ececec; box-shadow: 5px 6px #ececec; border-radius: 3px;">
      <center style="margin: 1% 45% 2% 45%">
          <img width="100%" src="https://lh4.googleusercontent.com/lmFOTjWZFXZoSeiZtbdNUFzxHHu4Rm_URQf25-vcfN_tBn9QsikgC_ndQKGEk6Zlkq4mnyMgtFp4d_T4PGbu=w1600-h758-rw" alt="">
      </center><hr style="border: 1px solid #ececec" />
      <div>
          <div style="padding-top: 6%; margin: 0 4% 0 10%;">
         <br/>
          ${msg}<br/>
              <p style="font-size: 20px;font-family: 'proxima-nova','Helvetica Neue','Helvetica','Arial','sans-serif'; margin-bottom: 4%;">Thank you for choosing us.</p>
              <p style="font-size: 20px;font-family: 'proxima-nova','Helvetica Neue','Helvetica','Arial','sans-serif'; margin-bottom: 7%;">We have recieve your complaint request, and our team will Resposnd you soon.</p>
          </div><br /><br />
          <hr style="border: 1px solid #ececec" />
          <div style="padding-top: 1%; margin: 0 4% 0 10%;">
              <p style="font-weight: 600;font-size:19px;font-family: 'proxima-nova','Helvetica Neue','Helvetica','Arial','sans-serif';">Thanks, </p>
              <p style="font-size:18px;font-family: 'proxima-nova','Helvetica Neue','Helvetica','Arial','sans-serif';margin-top: -20px;">Team QuFiz </p>
          </div>
      </div>
  </div>`
  };

  trans.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(
        "Email sent for complaint register:",
        info.messageId,
        info.response
      );
    }
  });
};
