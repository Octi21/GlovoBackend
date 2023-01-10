const models = require("../../models");

module.exports = async (source, {name,  restaurantId}, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }

  const food = await models.Food.create({
    name,
    restaurantId
  });

  return food;
}