const { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

const models = require("../../models");



const restaurantType = new GraphQLObjectType({
  name: 'Restaurant',
  fields: () => {
    const foodType = require("./foodType")
    return ({
      id: {
          type: GraphQLID,
      },
      name: {
          type: GraphQLString,
      },
      foods: {
        type: new GraphQLList(foodType),
        resolve: (restaurant) =>{
          return models.Food.findAll({
            // attributes: [],
            where: {
              restaurantId: restaurant.id
            }
          })
        }
      }
    })
  }
});

module.exports = restaurantType;