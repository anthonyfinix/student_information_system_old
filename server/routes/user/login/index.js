const authenticate = require("../util/authenticate");

module.exports = async (req, res) => {
  const { username, password } = req.body;
  let response = await authenticate({ username, password });
  if(response.err) return res.json({err:response.err});
  res.json({ name:response.name,username:response.username,email:response.email,token:response.accessToken });
};
