let account_id = "AC5bd82e52916581c6b13b0f2f441b45f5";
let auth_id = "1410926b1200db7ec02628563e7ec453";
let twilio = require("twilio")(account_id, auth_id);

//using twilio
function otp(otp1) {
  let o = otp1;

  let msg = [{ mass: "send", otp: `${o}` }];

  twilio.messages
    .create({
      from: "+19705949275",
      to: `+91 9010813851`,
      body: `your otp is ${o}`,
    })
    .then((r) => {
      console.log(msg);
    })

    .catch((err) => {
      console.log(err);
    });
}

otp(1525);
