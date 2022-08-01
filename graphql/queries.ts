import { gql } from '@apollo/client'

export const getPosts = gql`
  query Posts {
    blogs(sort: "id:desc") {
      data {
        id
        attributes {
          Title
          Slug
          publishedAt
          categories {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
        }
      }
    }
  }
`

export const getPost = gql`
  query Posts($slug: String!) {
    blogs(filters: { Slug: { eq: $slug } }) {
      data {
        id
        attributes {
          Title
          Slug
          Body
          publishedAt
          categories {
            data {
              attributes {
                Title
                Slug
              }
            }
          }
        }
      }
    }
  }
`
