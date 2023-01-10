const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} = require("graphql");

const addressType = require("../types/addressType");
const updateAddressResolver = require('../resolvers/updateAddressResolver');

module.exports = {
  type: addressType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    city: {
      type: GraphQLString,
    },
    street: {
      type: GraphQLString,
    },
  },
  resolve: updateAddressResolver,
}
