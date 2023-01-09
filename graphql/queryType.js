const {
  GraphQLObjectType,
} = require('graphql');

const usersQuery = require('./queries/usersQuery');
const adressesQuery = require('./queries/adressesQuery')

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: usersQuery,
    addresses: adressesQuery
  }
});

module.exports = queryType;
