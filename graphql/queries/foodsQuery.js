const {GraphQLList} = require("graphql");
const foodType = require("../types/foodType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(foodType),
  resolve: (_, __, { tokenPayload }) => {
    if(!tokenPayload) {
      throw new Error("You need to be logged in");
    }

    return models.Food.findAll();
  }
}
