const router = require("express").Router();

const getStudents = require("./getStudents");

router.get("/", getStudents);

module.exports = router;
