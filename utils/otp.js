let account_id = "AC5bd82e52916581c6b13b0f2f441b45f5";
let auth_id = "3921406626384bd25ce84642022b3409";
let twilio = require("twilio")(account_id , auth_id);

function otp(oo){

    let o = oo


    let daddy = [{"mass":"send" , "otp" : `${o}`}];


    twilio.messages.create({
        from : "+19705949275",
        to : `+91 9010813851`,
        body : `your otp is ${o}` 
    }).then((r)=>{console.log(daddy)
        })
        
    .catch((err)=>{console.log(err)});

}


otp(1234);