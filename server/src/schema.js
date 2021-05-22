const { gql } = require('apollo-server');

const typeDefs = gql`
  # Schema definitions go here
  type Track {
    id: ID!
    "the tracks title"
    title: String!
    "the tracks main author"
    author: Author!
    "the ilustration"
    thumbnail: String
    "the track's aproximate to complete"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }
  "Author of a complete track"
  type Author {
    id: ID!
    "Author, the first and last name"
    name: String!
    "Author, profile picture url"
    photo: String
  }

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
`;

module.exports = typeDefs;
