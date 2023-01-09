const { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = require('graphql');

const models = require("../../models");



const foodType = new GraphQLObjectType({
  name: 'Food',
  fields: () => {
    const restaurantType = require("./restaurantType")
    return ({
      id: {
        type: GraphQLID,
      },
      name: {
          type: GraphQLString,
      },
      restaurantId: {
        type: GraphQLInt,
      },
      restaurant: {
        type: restaurantType,
        resolve: (food) => {
          
          return models.Restaurant.findByPk(food.restaurantId)
        }
      }
    })
      
  }
});

module.exports = foodType;