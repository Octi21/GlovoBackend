const models = require("../../models");

module.exports = async (source, args, { tokenPayload }) => {
  const {
    id,
    city,
    street,
  } = args;
  if(!tokenPayload) {
    return null;
  }

  await models.Address.update({
    city,
    street
  }, {
    where: {
      id,
    }
  });

  return models.Address.findByPk(id);
}
