const {gql} = require('apollo-server');

// Schema
const typeDefs = gql`
    type User {
      name: String
      lastname: String
      email: String
      created:
    }
    type Query {
        obtainCourse: String
    }
    type Mutation {
        newUser: User
    }
`;

module.exports = typeDefs;
