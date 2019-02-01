const { ApolloServer, gql } = require('apollo-server-koa')
const { books, hello } = require('./data')

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    hello: String
    books: [Book]
  }
`

const resolvers = {
  Query: {
    hello: () => hello,
    books: () => books
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

module.exports = server
