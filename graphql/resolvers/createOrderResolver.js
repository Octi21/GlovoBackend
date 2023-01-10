const models = require("../../models");

module.exports = async (source, {userId,  restaurantId}, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }

  const order = await models.Order.create({
    userId,
    restaurantId
  });

  return order;
}