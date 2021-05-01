const {ApolloServer} = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const connectDB = require('./config/db');

// Connectar to data base
connectDB();

//server
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({url}) => {
    console.log(`Server ready in URL ${url}`)
})
