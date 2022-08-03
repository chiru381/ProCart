const Plan = require("../model/Plan");
const User = require("../model/User");
const Payment = require("../model/Payment");
const paypalHelper = require('../utils/paypal')

const stripe = require("stripe")(process.env.STRIPE_URL);

const createPlan = async (req, res) => {
  const newPlan = new Plan(req.body);
  try {
    const savedPlan = await newPlan.save();
    res.status(200).json(savedPlan);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPlan = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json(err);
  }
};

const purchasePlan = async (req, res) => {
    // const studentData = req.user;
    //   console.log(studentData, '......1')
      const planType = req.body.planType;
      console.log(planType, '.....2')
      const planId = req.body.planId;
      console.log(planId, '....3')
      const plan = await Plan.findOne({
        _id: planId,
        type: planType,
        status: 'active',
      });
      console.log(plan, '.....4')
      if(plan.type === "free"){
        console.log('...........free plan')
        let userPanUpdate = await User.updateOne(
          { _id: studentData._id },
          { $set: { plan:  plan.id } })
          console.log(userPanUpdate, '......5')
          return res.status(200).json(userPanUpdate, "Your have choosen a Free Plan is added to your account.");
      } else {
        console.log('........paid plan')
        const create_payment_json = {
          "intent": "sale",
          "payer": {
            "payment_method": "paypal"
          },
          "redirect_urls": {
            "return_url": "http://devcareerweb.mindwavetech.com/student/dashboardd",
            "cancel_url": "http://devcareerweb.mindwavetech.com/student/wizardd"
          },
          "transactions": [{
            "item_list": {
              "items": [{
                "name": plan.name,
                "sku": 'plan.description',
                "price": plan.price-plan.discount,
                "currency": "USD",
                "quantity": 1
              }]
            },
            "amount": {
              "currency": "USD",
              "total":  plan.price-plan.discount
            },
            "description": 'plan.description'
          }]
        };
      console.log(JSON.stringify(create_payment_json));

      //create paypal payment
      const dataPayment=  await paypalHelper.createPaymentIntent(create_payment_json)
      console.log('.........dataPayment',dataPayment)
      var id = dataPayment.id; 
      var links = dataPayment.links;
      var counter = links.length; 
      console.log(counter, '....8')
      var payment = {};
      while( counter -- ) {
        if ( links[counter].method == 'REDIRECT') {
            // redirect to paypal where user approves the transaction 
            payment.redirect= links[counter].href 
        }
    } 
    console.log('..........studentData._id',plan)

    payment = await Payment.create({
          // user: studentData._id,
          plan: plan.id,
          // amount: plan.price-plan.discount,
          paymentId: dataPayment.id,
          mode: 'online',
          method: 'card',
          source: {},
          purchaseType: 'plan',
          status:'pending',
          description:'Payment is pending pending',
          log: {
            captureMethod:  payment.redirect ,
          }
    })
    console.log(payment, '...........paymentttt')

    return res.status(200).json(payment, "Your payment is successfully.");
  } 
}

const stripePayment = async (req, res) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "inr",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
}

module.exports = {
  createPlan,
  getPlan,
  purchasePlan,
  stripePayment,
};
