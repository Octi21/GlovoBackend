const {GraphQLList} = require("graphql");
const userType = require("../types/userType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(userType),
  resolve: (_, __, { tokenPayload }) => {
    if(!tokenPayload) {
      throw new Error("You need to be logged in");
    }

    return models.User.findAll();
  }
}
