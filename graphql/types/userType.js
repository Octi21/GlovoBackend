const { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = require('graphql');

const models = require("../../models");


const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => {
    const orderType = require("./orderType")


    return ({
      id: {
        type: GraphQLID,
      },
      username: {
        type: GraphQLString,
      },
      orders: {
        type: new GraphQLList(orderType),
        resolve: (user) => {
          return models.Order.findAll({
            where: {
              userId: user.id
            }
          })
        }
      }
    })
      
  }
});

module.exports = userType;