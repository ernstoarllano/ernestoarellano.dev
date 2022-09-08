import { gql } from '@apollo/client'

export const getStrapiPosts = gql`
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

export const getStrapiPost = gql`
  query Post($slug: String!) {
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

export const getStrapiPage = gql`
  query Page($id: ID!) {
    page(id: $id) {
      data {
        id
        attributes {
          Body
        }
      }
    }
  }
`

export const getStrapiProjects = gql`
  query Projects {
    projects(sort: "id:desc") {
      data {
        id
        attributes {
          Tag
          Title
          Description
          Thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          Website
          Tech
        }
      }
    }
  }
`
