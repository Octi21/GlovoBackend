const {
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID
} = require("graphql");

const deleteFoodResolver = require('../resolvers/deleteFoodResolver');

module.exports = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteFoodResolver,
};
