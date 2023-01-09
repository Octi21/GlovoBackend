const { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = require('graphql');


const studentType = new GraphQLObjectType({
  name: 'User',
  fields: {
      id: {
          type: GraphQLID,
      },
      username: {
          type: GraphQLString,
      },
  }
});

module.exports = studentType;