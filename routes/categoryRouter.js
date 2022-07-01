const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategory,
} = require("../controllers/categoryController");

router.post("/create-category", createCategory);
router.get("/", getCategory);

module.exports = router;
