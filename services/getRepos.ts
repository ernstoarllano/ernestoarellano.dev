import { octokit } from 'lib/github'

export const getRepos = async () => {
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

  return nodes
}
