const {GraphQLList} = require("graphql");
const orderType = require("../types/orderType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(orderType),
  resolve: (_, __, { tokenPayload }) => {
    if(!tokenPayload) {
      throw new Error("You need to be logged in");
    }

    return models.Order.findAll();
  }
}
