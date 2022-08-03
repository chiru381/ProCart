const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'live', //sandbox or live
  'client_id': 'AZDb56zhkzl49sYjj3A0h2H1c6Qjg9DPleovc2zKiSyGrasH6Bjb5db0uxUBuBZ5FJQ-BW0qfwQAPP4f',
  'client_secret': 'ENBmHW-1zNDfYyVlsK8nGUwkWq8q38r5Zr_yW1PsFll0BVpOi9UCA0H2vgzrHxcrsdUmdSpExbqBB72u'
});


module.exports = {
  async createPaymentIntent(payment) {

    try {
        return new Promise( ( resolve , reject ) => {
            paypal.payment.create( payment , function( err , payment ) {
             if ( err ) {
                 reject(err);
             }
            else {
                resolve(payment);
            }
            });
        });
      }
     catch (error) {
      console.log(error);
    }
  },


  async confirmPaymentIntent(paymentId,paymentjson) {
    try {
      console.log('helper',paymentId)
        return new Promise( ( resolve , reject ) => {
          paypal.payment.execute(paymentId, paymentjson , function( err , payment ) {
             if ( err ) {
              console.log(err)
                 reject(err);
             }
            else {
           //  console.log(payment)
                resolve(JSON.stringify(payment));
            }
            });
        });
      }
     catch (error) {
      console.log(error);
    }
  }

};