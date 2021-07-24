const express = require("express");

const router = express.Router();
const {createCategory,getCategory} = require('../controllers/category');

router.post('/',createCategory);
router.get('/',getCategory);


 module.exports = router;