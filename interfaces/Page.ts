import { Post } from 'interfaces/Post'
import { Repo } from 'interfaces/Repo'

export interface HomePageProps {
  content: string | ''
  repos: Repo[] | []
  posts: Post[] | []
}

export interface PostPageProps {
  post: {
    Title: string
    Body: string
    Slug: string
    publishedAt: string
    categories: {
      data: [
        {
          attributes: {
            Title: string
            Slug: string
          }
        }
      ]
    }
  }
  content: string | ''
}
