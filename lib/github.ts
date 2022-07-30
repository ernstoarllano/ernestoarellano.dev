import { graphql } from '@octokit/graphql'

export const octokit = graphql.defaults({
  headers: {
    authorization: `token ${process.env.githubToken}`,
  },
})
