const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/crud-book', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: true,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server
  .listen({ port: 4001 })
  .then(({ url }) => console.log(`🚀 app running at ${url}`));
