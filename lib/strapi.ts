import { ApolloClient, InMemoryCache } from '@apollo/client'

export const strapi = new ApolloClient({
  uri: process.env.strapiGraqphQLURI,
  cache: new InMemoryCache({
    typePolicies: {
      Blog: {
        keyFields: ['Title', 'Slug'],
      },
    },
  }),
})
