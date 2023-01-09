const models = require("../../models");
module.exports = async (source, {username,  password}, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }

  const user = await models.Student.create({
    username,
    password
  });

  return user;
}