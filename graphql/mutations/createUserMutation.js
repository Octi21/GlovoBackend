const {
  GraphQLNonNull,
  GraphQLString
} = require("graphql");
const userType = require("../types/userType");
const createUserResolver = require('../resolvers/createUserResolver');

module.exports = {
  type: userType,
  args: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    }
  
  },
  resolve: createUserResolver,
}
