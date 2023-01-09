const { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = require('graphql');


const orderType = new GraphQLObjectType({
  name: 'Order',
  fields: {
      id: {
          type: GraphQLID,
      },
      userId: {
          type: GraphQLInt,
      },
      Id: {
        type: GraphQLInt,
      },
  }
});

module.exports = orderType;