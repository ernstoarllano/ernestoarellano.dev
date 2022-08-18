import { getStrapiPosts } from 'graphql/queries'
import { strapi } from 'lib/strapi'

type PostsPromise = {
  posts: Record<string, any>[]
}

export const getPosts = async (): Promise<
  PostsPromise | Record<any, never>
> => {
  try {
    const { data } = await strapi.query({ query: getStrapiPosts })
    const { blogs } = data

    return {
      posts: blogs.data,
    }
  } catch (err) {
    throw err
  }
}
