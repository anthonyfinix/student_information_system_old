const Student = require("../../modals/student");
module.exports = async (req, res) => {
  let students = await Student.find({});
  res.json({ students });
};
