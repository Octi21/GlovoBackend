const {GraphQLList} = require("graphql");
const restaurantType = require("../types/restaurantType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(restaurantType),
  resolve: (_, __, { tokenPayload }) => {
    if(!tokenPayload) {
      throw new Error("You need to be logged in");
    }
    return models.Restaurant.findAll();
  }
}
