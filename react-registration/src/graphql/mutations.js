import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation Register(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      role: $role
    ) {
      message
      user{
        id
        firstName
        lastName
        email
        role
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!, $adminLogin: Boolean!) {
    login(email: $email, password: $password, adminLogin: $adminLogin) {
      token
      message
    }
  }
`;

