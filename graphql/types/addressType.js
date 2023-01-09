const { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = require('graphql');


const addressType = new GraphQLObjectType({
  name: 'Address',
  fields: {
      id: {
          type: GraphQLID,
      },
      city: {
          type: GraphQLString,
      },
      street: {
        type: GraphQLString,
    },
  }
});

module.exports = addressType;