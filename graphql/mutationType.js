const {
  GraphQLObjectType,
} = require('graphql');

const loginMutation = require('./mutations/loginMutation');

const createUserMutation = require('./mutations/createUserMutation')

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: createUserMutation,

    login: loginMutation
  }
});

module.exports = mutationType;
