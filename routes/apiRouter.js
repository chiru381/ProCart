const express = require("express");
const router = express.Router();

const { getPlan, createPlan, purchasePlan } = require('../controllers/apiController')

router.get('/getplan', getPlan )
router.post('/createPlan', createPlan)
router.post('/purchase-plan', purchasePlan)

module.exports = router;
