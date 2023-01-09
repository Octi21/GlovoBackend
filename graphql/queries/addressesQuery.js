const {GraphQLList} = require("graphql");
const addressType = require("../types/addressType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(addressType),
  resolve: (_, __, { tokenPayload }) => {
    if(!tokenPayload) {
      throw new Error("You need to be logged in");
    }

    return models.Address.findAll();
  }
}
