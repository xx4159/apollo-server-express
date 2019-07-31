const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = require('./schema');

// Provide resolver functions for your schema fields
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
