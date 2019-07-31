const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  hello: String,
  getFortuneCookie: String,
}
`;

module.exports = typeDefs;
