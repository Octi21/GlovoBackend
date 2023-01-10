const {
  GraphQLObjectType,
} = require('graphql');

const loginMutation = require('./mutations/loginMutation');

const createUserMutation = require('./mutations/createUserMutation')
const createOrderMutation = require('./mutations/createOrderMutation')
const deleteFoodMutation = require('./mutations/deleteFoodMutation')
const createFoodMutation = require('./mutations/createFoodMutation')
const updateAddressMutation = require('./mutations/updateAddressMutation')

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: createUserMutation,
    createOrder: createOrderMutation,
    deleteFood: deleteFoodMutation,
    createFood: createFoodMutation, 
    updateAddress: updateAddressMutation,

    login: loginMutation
  }
});

module.exports = mutationType;
