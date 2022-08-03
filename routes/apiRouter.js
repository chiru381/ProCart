const express = require("express");
const router = express.Router();

const { getPlan, createPlan, purchasePlan, stripePayment } = require('../controllers/apiController')

router.get('/getplan', getPlan )
router.post('/createPlan', createPlan)
router.post('/purchase-plan', purchasePlan)
router.post('/payment', stripePayment)

module.exports = router;
