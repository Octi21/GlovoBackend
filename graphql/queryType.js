const {
  GraphQLObjectType,
} = require('graphql');

const usersQuery = require('./queries/usersQuery');
const addressesQuery = require('./queries/addressesQuery');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: usersQuery,
    addresses: addressesQuery
  }
});

module.exports = queryType;
