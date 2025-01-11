const { gql } = require('graphql-tag');

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    role: String
  }

  type RegisterPayload {
    user: User
    message: String
  }

  type AuthPayload {
    token: String
    message: String
  }
  
  type Query{
    getUser(email: String!): User
  }

  type Mutation {
    register(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      role: String!
    ): RegisterPayload
    login(email: String!, password: String!, adminLogin: Boolean!): AuthPayload
  }
`;

module.exports = typeDefs;
