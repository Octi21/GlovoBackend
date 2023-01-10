const models = require("../../models");

module.exports = (source, { id }) => {
  return models.Food.destroy({
    where: {
      id,
    }
  })
}
