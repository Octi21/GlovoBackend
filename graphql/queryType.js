const {
  GraphQLObjectType,
} = require('graphql');

const usersQuery = require('./queries/usersQuery');
const addressesQuery = require('./queries/addressesQuery');
const ordersQuery = require("./queries/ordersQuery.js")
const restaurantsQuery = require('./queries/restaurantsQuery')
const foodsQuery = require('./queries/foodsQuery')

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: usersQuery,
    addresses: addressesQuery,
    restaurants: restaurantsQuery,
    foods: foodsQuery,
    orders: ordersQuery,
  }
});

module.exports = queryType;
