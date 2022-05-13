import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
    }
  `,

  resolvers: {
    Query: {
      hello: () => {
        return 'did i right?';
      },
      hi: () => {
        return 'other query for here';
      },
    },
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`server listening to ${url}`);
});
