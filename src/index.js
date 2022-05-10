import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,
});

server.listen(4000).then(({ url }) => {
  console.log(`server listening to ${url}`);
});
