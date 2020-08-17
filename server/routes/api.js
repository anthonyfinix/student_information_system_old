const router = require('express').Router();
const user = require('./user');
const students = require('./students');

router.use('/user',user);
router.use('/students',students);

module.exports = router;