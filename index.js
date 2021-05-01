const {ApolloServer} = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');




//server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  ctx: () => {
    const myContext = "Hello";

    return {
    myContext
  }
  }
});


// start the server
server.listen().then(({url})=> {
  console.log(`Server ready in URL ${url}`)
})
