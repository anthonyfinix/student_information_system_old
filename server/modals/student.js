const mongoose = require("mongoose");

studentSchema = new mongoose.Schema({
  studentDetails: {
    name: String,
    gender: String,
    dob: Date,
  },
});

module.exports = mongoose.model("Student", studentSchema);
