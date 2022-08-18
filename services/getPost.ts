import { getStrapiPost } from 'graphql/queries'
import { getHTML } from 'helpers/getHTML'
import { strapi } from 'lib/strapi'

type PostPromise = {
  post: Record<string, any>
  content: string
}

export const getPost = async (
  slug: string
): Promise<PostPromise | Record<any, never>> => {
  try {
    const { data } = await strapi.query({
      query: getStrapiPost,
      variables: { slug },
    })
    const { blogs } = data
    const pageContent = await getHTML(blogs.data[0].attributes.Body)

    return {
      post: blogs.data[0].attributes,
      content: pageContent.value as string,
    }
  } catch (err) {
    throw err
  }
}
