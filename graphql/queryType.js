const {
  GraphQLObjectType,
} = require('graphql');

const usersQuery = require('./queries/usersQuery');


const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: usersQuery
  }
});

module.exports = queryType;
