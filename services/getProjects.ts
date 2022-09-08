import { getStrapiProjects } from 'graphql/queries'
import { strapi } from 'lib/strapi'

type ProjectsPromise = {
  projects: Record<string, any>[]
}

export const getProjects = async (): Promise<
  ProjectsPromise | Record<any, never>
> => {
  try {
    const { data } = await strapi.query({ query: getStrapiProjects })
    const { projects } = data

    return {
      projects: projects.data,
    }
  } catch (err) {
    throw err
  }
}
