const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} = require("graphql");


const foodType = require("../types/foodType");
const createFoodResolver = require('../resolvers/createFoodResolver');

module.exports = {
  type: foodType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    restaurantId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  
  },
  resolve: createFoodResolver,
}
