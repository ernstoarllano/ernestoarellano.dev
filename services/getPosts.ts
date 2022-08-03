import { getStrapiPosts } from 'graphql/queries'
import { strapi } from 'lib/strapi'

export const getPosts = async () => {
  try {
    const { data } = await strapi.query({ query: getStrapiPosts })
    const { blogs } = data

    return {
      posts: blogs.data || [],
    }
  } catch (err) {
    throw err
  }
}
