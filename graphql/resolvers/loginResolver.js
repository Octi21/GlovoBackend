const models = require("../../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "392980c66ecb9dc4e599a5314446ae44";

module.exports = async (_, args) => {
  const {
    username,
    password
  } = args;

  const user = await models.User.findOne({
    where: {
      username,
    }
  });

  if(!user) {
    return {
      token: null,
    }
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if(passwordMatches) {
    const token = jwt.sign({ userID: user.id }, JWT_SECRET);

    return {
      token,
    }
  }

  return {
    token: null,
  }
}
