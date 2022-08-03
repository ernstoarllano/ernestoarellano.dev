import { getStrapiPost } from 'graphql/queries'
import { getHTML } from 'helpers/getHTML'
import { strapi } from 'lib/strapi'

export const getPost = async (slug: string) => {
  try {
    const { data } = await strapi.query({
      query: getStrapiPost,
      variables: { slug },
    })
    const { blogs } = data
    const pageContent = (await getHTML(blogs.data[0].attributes.Body)) || ''

    return {
      post: blogs.data[0].attributes,
      content: pageContent.value,
    }
  } catch (err) {
    throw err
  }
}
