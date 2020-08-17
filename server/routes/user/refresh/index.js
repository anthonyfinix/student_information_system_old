const generateAccessToken = require("../util/generateAccessToken");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const { token } = req.body;
  let userData;
  try {
    userDate = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.json(err);
  }
  return res.json(...userData);
};
