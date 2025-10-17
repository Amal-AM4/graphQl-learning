const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String! # ! - means this field cannot be empty
    username: String!
    age: Int!
    nationality: Nationality!
  }

  # api
  type Query {
    users: [User!]!
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
