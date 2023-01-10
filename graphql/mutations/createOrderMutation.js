const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} = require("graphql");


const orderType = require("../types/orderType");
const createOrderResolver = require('../resolvers/createOrderResolver');

module.exports = {
  type: orderType,
  args: {
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    restaurantId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  
  },
  resolve: createOrderResolver,
}
