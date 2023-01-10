const { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt
} = require('graphql');


const models = require("../../models");


const orderType = new GraphQLObjectType({
  name: 'Order',
  fields: () => {
    const userType = require("./userType")
    const restaurantType = require("./restaurantType")

    return ({
      id: {
        type: GraphQLID,
      },
      userId: {
          type: GraphQLInt,
      },
      restaurantId: {
        type: GraphQLInt,
      },
      user: {
        type: userType,
        resolve: (order) => {
          
          return models.User.findByPk(order.userId)
        }
      },
      restaurant: {
        type: restaurantType,
        resolve: (order) => {
          
          return models.Restaurant.findByPk(order.restaurantId)
        }
      },
    })
      
     
  }
});

module.exports = orderType;