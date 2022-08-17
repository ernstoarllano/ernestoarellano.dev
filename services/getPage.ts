import { getStrapiPage } from 'graphql/queries'
import { getHTML } from 'helpers/getHTML'
import { strapi } from 'lib/strapi'

type PagePromise = {
  content?: string
}

export const getPage = async (id: number): Promise<PagePromise | void> => {
  try {
    const { data } = await strapi.query({
      query: getStrapiPage,
      variables: { id },
    })
    const { page } = data
    const pageContent = await getHTML(page.data.attributes.Body)

    return {
      content: pageContent.value as string,
    }
  } catch (err) {
    throw err
  }
}
