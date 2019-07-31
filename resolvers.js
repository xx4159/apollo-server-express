const connectors = require('./connectors');

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getFortuneCookie: connectors.FortuneCookie.getOne,
  },
};

module.exports = resolvers;
