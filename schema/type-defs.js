const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String! # ! - means this field cannot be empty
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  # api
  type Query {
    users: [User!]!
    user(id: ID!): User! 
  }

  enum Nationality {
    INDIAN
    AMERICAN
    FRENCH
    JAPANESE
    MEXICAN
    GERMAN
    EMIRATI
    CHINESE
    RUSSIAN
    IRISH
    ITALIAN
    KOREAN
    NIGERIAN
    SWEDISH
  }
`;

module.exports = { typeDefs };
