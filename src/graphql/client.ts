import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPHQL_HOST || '';
const authorization = `Bearer ${process.env.GRAPHQL_TOKEN}`;

const client = new GraphQLClient(endpoint, {
  headers: { authorization },
});

export default client;
