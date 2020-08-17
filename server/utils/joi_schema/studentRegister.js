const joi = require("@hapi/joi");
const Joi = require("@hapi/joi");

var studentDetails = joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    gender: Joi.string().min(3).max(10).required(),
    dob: Joi.date().required(),
});


exports = studentDetails;
