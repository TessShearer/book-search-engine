// TO DO: Define query and mutation types

const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

type Book {
    bookId: Int
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Query {
    me: User
    user(username: String!): User
    savedBooks(username: String): [Book]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors:[], description, title, bookId, image, link): User
    removeBook(bookId: Int!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`

// Query type:
// me: which returns a User type

// Mutation type:
// login: accepts an email and password as parameters, returns an Auth type
// addUser: Accepts a username, email, and password as parameters, returns an Auth type
// saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters, returns a User type. (look into creating an input type to handle these parameters)
// removeBook: Accepts a book's bookId as a parameter, returns a User type

// User type:
// _id, username, email, bookCount, savedBooks (array of the Book type)

// Book type: 
// bookId (not _id, but book's id value returned from Google's Book API), authors (an array of strings, there may be multiple authors), description, title, image, link

// Auth type:
// token, user (references User type)

module.exports = typeDefs;