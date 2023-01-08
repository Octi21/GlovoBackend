const {
  GraphQLObjectType,
} = require('graphql');

const loginMutation = require('./mutations/loginMutation');

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
      login: loginMutation,
  }
});

module.exports = mutationType;
