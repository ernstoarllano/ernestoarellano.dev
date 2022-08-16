import { GraphqlResponseError } from '@octokit/graphql'
import { Repo } from 'interfaces/GitHub'
import { octokit } from 'lib/github'

type ReposPromise = {
  repos: Repo[] | void
}

export const getRepos = async (): Promise<ReposPromise> => {
  try {
    const {
      user: {
        pinnedItems: { nodes },
      },
    } = await octokit(`
      query {
        user(login: "ernstoarllano") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                primaryLanguage {
                  name
                }
                homepageUrl
              }
            }
          }
        }
      }
    `)

    return {
      repos: nodes,
    }
  } catch (err) {
    if (err instanceof GraphqlResponseError) {
      console.error(err.message)
    }
    throw err
  }
}
